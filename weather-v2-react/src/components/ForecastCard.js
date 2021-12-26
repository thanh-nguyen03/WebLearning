import React from 'react';

const ForecastCard = ({ tomorrow, day, forecastWeather, forecastId }) => {
  return (
    <>
      {typeof forecastWeather.daily !== 'undefined' ? (
        <div className={`forecast-card ${tomorrow}`}>
          <p className="forecast-day">{day}</p>
          <h1 className="forecast-temp">
            {Math.round(forecastWeather.daily[forecastId].temp.day)}°C
          </h1>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ForecastCard;
