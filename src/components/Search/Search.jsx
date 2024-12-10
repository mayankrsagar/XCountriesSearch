import {
  useContext,
  useState,
} from 'react';

import { CountryContext } from '../../App';
import styles from './Search.module.css';

const Search = () => {
  const { country, setFilterCountry } = useContext(CountryContext);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    if (value === "") {
      setFilterCountry(country);
    } else {
      setFilterCountry(
        country.filter((item) =>
          item.name.common.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  return (
    <input
      type="text"
      name="searchBar"
      className={styles.searchBar}
      placeholder="Search for countries"
      value={searchValue}
      onChange={handleChange}
    />
  );
};

export default Search;
