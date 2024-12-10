import {
  createContext,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import Home from './pages/Home/Home';

export const  CountryContext =createContext();
function App() {

  const [country, setCountry]=useState([]);
  const [filterCountry, setFilterCountry]=useState([]);

const fetchCountry=async()=>{
  try {
    const url = "https://restcountries.com/v3.1/all";
    const response = await axios.get(url);
    setCountry(response.data);
    setFilterCountry(response.data);
  } catch (error) {
    console.error(error);
  }
  
}


  useEffect(()=>{
fetchCountry();
  },[])

  return (
    <>
    <CountryContext.Provider value={{country, setCountry , filterCountry, setFilterCountry}}>
    <Home />
    </CountryContext.Provider>
     
    </>
  )
}

export default App
