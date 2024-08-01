import React, { useState } from 'react';
import CountryList from './CountryList';
import './styles.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const fetchCountries = (name) => {
    const apiKey = import.meta.env.VITE_COUNTRY_API_KEY;
    if (!apiKey) {
      console.error("API key is missing!");
      return;
    }
    fetch(`http://api.countrylayer.com/v2/name/${name}?access_key=${apiKey}&fullText=true`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCountries(data);
        setSearch(''); // Clear the input after fetching the data
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      fetchCountries(search);
    }
  };

  return (
    <div className="container">
      <h1>Country Information</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <CountryList countries={countries} />
    </div>
  );
};

export default App;
