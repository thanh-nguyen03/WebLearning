import React from 'react';

const WeatherProperties = ({ properties, icon, currentWeather }) => {
  return (
    <div>
      {typeof currentWeather.weather !== 'undefined' ? (
        <div className="properties-container">
          <i className={`fas fa-${icon} properties-icon`}></i>
          <div>
            <p className="properties">{properties}</p>
            <span className="properties-detail">
              {properties === 'Humidity'
                ? currentWeather.main.humidity + '%'
                : properties === 'Air Pressure'
                ? currentWeather.main.pressure + 'PS'
                : properties === 'Visibility'
                ? Math.round(parseInt(currentWeather.visibility) / 1000) + ' km'
                : currentWeather.wind.speed + ' km/h'}
            </span>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default WeatherProperties;
