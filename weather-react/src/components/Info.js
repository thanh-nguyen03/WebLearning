import React from 'react';

const Info = ({ weather }) => {
  return (
    <div className="info-container">
      <h1>
        {weather.name}, {weather.sys.country}
      </h1>
      <div className="temp-wrapper">
        <span>{Math.round(weather.main.temp) + '°C'}</span>
      </div>
      <p>{weather.weather[0].main}</p>
    </div>
  );
};

export default Info;
