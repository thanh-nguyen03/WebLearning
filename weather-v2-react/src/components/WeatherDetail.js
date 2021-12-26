import React from 'react';
import WeatherProperties from './WeatherProperties';

const WeatherDetail = ({ currentWeather }) => {
  return (
    <div>
      <WeatherProperties
        currentWeather={currentWeather}
        properties="Humidity"
        icon="tint"
      />
      <WeatherProperties
        currentWeather={currentWeather}
        properties="Air Pressure"
        icon="cloud"
      />
      <WeatherProperties
        currentWeather={currentWeather}
        properties="Visibility"
        icon="eye"
      />
      <WeatherProperties
        currentWeather={currentWeather}
        properties="Wind Speed"
        icon="wind"
      />
    </div>
  );
};

export default WeatherDetail;
