import React from 'react';
import Country from './Country';

const CountryList = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <Country key={country.alpha3Code} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
