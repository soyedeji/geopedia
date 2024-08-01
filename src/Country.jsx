import React from 'react';

const Country = ({ country }) => {
  const { name, topLevelDomain, alpha2Code, alpha3Code, callingCodes, capital, region } = country;

  return (
    <div className="country">
      <h2>{name}</h2>
      <p>Top Level Domain: {topLevelDomain.join(', ')}</p>
      <p>Alpha-2 Code: {alpha2Code}</p>
      <p>Alpha-3 Code: {alpha3Code}</p>
      <p>Calling Code: {callingCodes.join(', ')}</p>
      <p>Capital: {capital}</p>
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
