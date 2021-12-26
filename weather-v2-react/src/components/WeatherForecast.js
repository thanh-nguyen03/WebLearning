import React from 'react';
import ForecastCard from './ForecastCard';

const WeatherForecast = ({ nextFiveDay, forecastWeather }) => {
  return (
    <div className="forecast-container">
      <p className="forecast-title">
        <i
          className="fas fa-arrow-circle-right"
          style={{ color: 'rgba(234, 119, 53, 1)', marginRight: '0.4rem' }}
        ></i>
        Next 5 days Forecast
      </p>

      <div className="forecast-card-container">
        <ForecastCard
          tomorrow="tomorrow"
          day={nextFiveDay[0]}
          forecastWeather={forecastWeather}
          forecastId={1}
        />
        <ForecastCard
          day={nextFiveDay[1]}
          forecastWeather={forecastWeather}
          forecastId={2}
        />
        <ForecastCard
          day={nextFiveDay[2]}
          forecastWeather={forecastWeather}
          forecastId={3}
        />
        <ForecastCard
          day={nextFiveDay[3]}
          forecastWeather={forecastWeather}
          forecastId={4}
        />
        <ForecastCard
          day={nextFiveDay[4]}
          forecastWeather={forecastWeather}
          forecastId={5}
        />
      </div>
    </div>
  );
};

export default WeatherForecast;
