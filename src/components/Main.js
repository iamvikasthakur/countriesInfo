import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DefaultTable from "./DefaultTable";
import ParticularTable from "./ParticularTable";

const Main = () => {

  const [searchedCountry, setSearchedCountry] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClear = () => {
    setSubmitted(false);
    setSearchedCountry("");
  };

  return (
    <div>
      <h1>Countries Information <em id="author">(Vikas Thakur)</em> </h1>
      <form noValidate autoComplete="off">
        <TextField
          value={searchedCountry}
          onChange={(e) => setSearchedCountry(e.target.value)}
          id="standard-basic"
          label="Country Name"
        />
        <Button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          varient="container"
          color="primary"
        >
          Submit
        </Button>
        <Button onClick={handleClear} varient="container" color="secondary">
          Clear
        </Button>
      </form>
      <br />
      {searchedCountry && submitted ? (
        <ParticularTable name={searchedCountry} submitted={submitted}/>
      ) : (
        <DefaultTable setSubmitted={setSubmitted} />
      )}
    </div>
  );
};

export default Main;
