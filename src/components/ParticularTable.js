import React, { useState, useEffect } from "react";
import CountriesTable from "./CountriesTable";

const ParticularTable = ({ name, submitted }) => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${name}?fullText=true`)
      .then((response) => response.json())
      .then((res2) => {
        if (res2.status !== 404 && res2.status !== 500) setCountry(res2);
        else setCountry(null);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [submitted]);

  if (isLoading) {
    return <h1> Loading... </h1>;
  }

  if (!country) {
    return <h1> Country Not Found</h1>;
  }

  // console.log(country);
  return <CountriesTable countries={country} />;
};

export default ParticularTable;
