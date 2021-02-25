import React, { useState, useEffect } from "react";
import CountriesTable from './CountriesTable';

const DefaultTable = ({ setSubmitted }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;area"
    )
    .then((response) => response.json())
    .then((countries) => setCountries(countries))
    .catch((err) => console.log(err));

    setIsLoading(false);
    setSubmitted(false);
  }, [countries]);

  if (isLoading) {
    return <h1> Loading... </h1>;
  }

  return <CountriesTable countries={countries}/>;
};

export default DefaultTable;
