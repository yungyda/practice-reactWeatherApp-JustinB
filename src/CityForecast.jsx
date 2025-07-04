import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

const cityImages = {
  NewYork: "https://images.unsplash.com/photo-1549921296-3a13d2cbe4c3",
  London: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
  Tokyo: "https://images.unsplash.com/photo-1504788363504-5f6a443cae1b"
};

const weatherData = {
  NewYork: {
    summary: "Sunny, 25°C",
    details: "Clear skies throughout the day with mild temperatures.",
    advice: "It's a perfect day to go outside! Grab your sunglasses and enjoy the sunshine!"
  },
  London: {
    summary: "Cloudy, 18°C",
    details: "Overcast with occasional light rain in the afternoon.",
    advice: "It might rain later, so don’t forget your umbrella. A light jacket would be nice!"
  },
  Tokyo: {
    summary: "Rainy, 22°C",
    details: "Continuous rain expected throughout the day.",
    advice: "Bring your umbrella and maybe some waterproof gear. A cozy indoor day could be nice too!"
  }
};

function CityForecast() {
  const { cityName } = useParams();
  const [forecast, setForecast] = useState(null);
  const [showAdvice, setShowAdvice] = useState(false); // New state for showing advice
  const detailsRef = useRef(null);

  useEffect(() => {
    const data = weatherData[cityName];
    setForecast(data);
  }, [cityName]);

  const handleScroll = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDetails = () => {
    // Toggle the showAdvice state
    setShowAdvice(prevState => !prevState);
    handleScroll(); // Scroll to the details section
  };

  if (!forecast) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>City not found</h2>
        <Link to="/">Back to City List</Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ fontSize: "2.5rem" }}>Weather Forecast for {cityName}</h2>
      <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{forecast.summary}</p>

      <button
        onClick={handleViewDetails} // Click to toggle the advice
        style={{
          padding: "12px 24px",
          fontSize: "1rem",
          borderRadius: "8px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginBottom: "1rem"
        }}
      >
        {showAdvice ? "Hide Details" : "View Details"} {/* Change text based on state */}
      </button>

      <div style={{ margin: "1rem auto" }}>
        <a href={cityImages[cityName]} target="_blank" rel="noopener noreferrer">
          <img
            src={cityImages[cityName]} // Use the correct city image from the object
            alt={`Image of ${cityName}`}
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              borderRadius: '12px',
              marginBottom: '1rem',
              boxShadow: '0 0 20px rgba(0,0,0,0.2)',
              cursor: 'pointer',
            }}
          />
        </a>
      </div>

      <div ref={detailsRef} style={{ marginTop: '2rem' }}>
        <h3>Details</h3>
        <p>{forecast.details}</p>
      </div>

      {/* Conditionally render the advice based on state */}
      {showAdvice && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Advice</h3>
          <p>{forecast.advice}</p>
        </div>
      )}

      <Link to="/" style={{ marginTop: "2rem", display: "inline-block", textDecoration: "none", fontSize: "1.2rem", color: "#007bff" }}>
        Back to City List
      </Link>
    </div>
  );
}

export default CityForecast;
