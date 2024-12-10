import React, { useContext } from 'react';

import { CountryContext } from '../../App';
import CountryCard from '../../components/CountryCard/CountryCard';
import Search from '../../components/Search/Search';
import styles from './Home.module.css';

const Home = () => {
  const { country, filterCountry } = useContext(CountryContext);

  return (
    <React.Fragment>
      <div className={styles.searchBar}>
        <Search />
      </div>
      <div className={styles.countriesDisplay}>
        {filterCountry.map((ele) => (
          <CountryCard key={ele.cca2} name={ele.name.common} flag={ele.flags.png} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;


