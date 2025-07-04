import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

const weatherData = {
  NewYork: {
    summary: "Sunny, 25°C",
    details: "Clear skies throughout the day with mild temperatures.",
  },
  London: {
    summary: "Cloudy, 18°C",
    details: "Overcast with occasional light rain in the afternoon.",
  },
  Tokyo: {
    summary: "Rainy, 22°C",
    details: "Continuous rain expected throughout the day.",
  },
};

function CityForecast() {
  const { cityName } = useParams();
  const [forecast, setForecast] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const data = weatherData[cityName];
    setForecast(data);
  }, [cityName]);

  const handleScroll = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!forecast) {
    return (
      <div>
        <h2>City not found</h2>
        <Link to="/">Back to City List</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Weather Forecast for {cityName}</h2>
      <p>{forecast.summary}</p>
      <button onClick={handleScroll}>View Details</button>

      <div ref={detailsRef} style={{ marginTop: '2rem' }}>
        <h3>Details</h3>
        <p>{forecast.details}</p>
      </div>

      <Link to="/">Back to City List</Link>
    </div>
  );
}

export default CityForecast;
