import { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromis }) => {
  const [visitedCountries, setVisitedCountires] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log("Total Visited Countries", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountires(newVisitedCountries);
  };

  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countriesPromis);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>I am countries here: {countries.length}</h1>
      <h3>Total Country Visited: {visitedCountries.length}</h3>
      <h3>Total Flags Visited: {visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="visited-flag-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag} />
        ))}
      </div>
      <div className="parent-card">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;