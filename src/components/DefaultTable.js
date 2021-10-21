import React, { useState, useEffect } from "react";
import CountriesTable from "./CountriesTable";

const DefaultTable = ({ setSubmitted }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,region,population,area"
    )
      .then((response) => response.json())
      .then((countries) => {
        setCountries(countries);
        setIsLoading(false);
        setSubmitted(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <h1> Loading... </h1>;
  }

  return <CountriesTable countries={countries} />;
};

export default DefaultTable;
