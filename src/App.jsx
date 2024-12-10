import {
  createContext,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import Home from './pages/Home/Home';

export const CountryContext = createContext();

function App() {
  const [country, setCountry] = useState([]);
  const [filterCountry, setFilterCountry] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountry(response.data);
        setFilterCountry(response.data); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <CountryContext.Provider value={{ country, filterCountry, setFilterCountry }}>
      <Home />
    </CountryContext.Provider>
  );
}


export default App
