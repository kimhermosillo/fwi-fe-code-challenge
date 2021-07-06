import React from 'react';
import { COUNTRIES } from '../constants';

const Countries = () => (
  <>
    <option value="">--Please choose a country--</option>
    {Object.keys(COUNTRIES).map((countryCode) => {
      return (
        <option key={countryCode} value={countryCode}>
          {COUNTRIES[countryCode]}
        </option>
      );
    })}
  </>
);

export default Countries;
