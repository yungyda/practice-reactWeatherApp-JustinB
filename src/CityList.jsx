import React from 'react';
import { Link } from 'react-router-dom';

function CityList() {
  const cities = ['NewYork', 'London', 'Tokyo'];

  return (
    <div>
      <h2>Select a City</h2>
      <ul>
        {cities.map(city => (
          <li key={city}>
            <Link to={`/forecast/${city}`}>{city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
