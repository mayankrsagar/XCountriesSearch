import React from 'react';

const CountryCard = ({ name, flag }) => {
  return (
    <div
      className="countryCard"
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        maxWidth: '200px',
        margin: '16px auto'
      }}
    >
      <img 
        src={flag} 
        alt={`Flag of ${name}`} 
        style={{ width: '100px', height: 'auto', margin: '8px 0' }} 
      />
      {/* Changed h3 to h2 to satisfy the test expectation */}
      <h2>{name}</h2>
    </div>
  );
};

export default CountryCard;
