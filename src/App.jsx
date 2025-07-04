import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CityList from './CityList';
import CityForecast from './CityForecast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/forecast/:cityName" element={<CityForecast />} />
      </Routes>
    </Router>
  );
}

export default App;
