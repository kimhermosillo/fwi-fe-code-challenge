import React from 'react';
import { COUNTRIES } from '../constants';

const Countries = () => (
  <>
    <option value="">Select Country</option>
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
