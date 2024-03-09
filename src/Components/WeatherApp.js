/*
import React from 'react';
import './WeatherApp.css';
import search from "../Assests/search.png";
import clear from "../Assests/clear.png";
import cloud from "../Assests/cloud.png";
import drizzle from "../Assests/drizzle.png";
import humidity from "../Assests/humidity.png";
import rain from "../Assests/rain.png";
import snow from "../Assests/snow.png";
import wind from "../Assests/wind.png";



const WeatherApp = () => {
  return (
    <div>
      hello dev's
    </div>
  );
}

export default WeatherApp;
*/
// WeatherApp.js

// WeatherApp.js

import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f0ea49f65b414b773c7d53946e90b2b&units=metric`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (error) {
        setError('City not found');
        setWeatherData(null);
      }
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].main}</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default WeatherApp;

