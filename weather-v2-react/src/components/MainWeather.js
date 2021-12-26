import Fog from '../img/weather-icon/fog.png';
import Rain from '../img/weather-icon/rain.png';
import Clouds from '../img/weather-icon/cloud.png';
import Clear from '../img/weather-icon/fair.png';
import Snow from '../img/weather-icon/snow.png';
import { useState } from 'react';

const MainWeather = ({
  onCurrentSearch,
  currentWeather,
  getForecastDay,
  onForecast,
}) => {
  const [query, setQuery] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onCurrentSearch(query);

    getForecastDay();
    console.log('test');
    setQuery('');
  };
  return (
    <div className="weather-main">
      {typeof currentWeather.weather !== 'undefined' ? (
        <>
          <img
            src={
              currentWeather.weather[0].main === 'Clouds'
                ? Clouds
                : currentWeather.weather[0].main === 'Clear'
                ? Clear
                : currentWeather.weather[0].main === 'Smoke'
                ? Fog
                : currentWeather.weather[0].main === 'Rain'
                ? Rain
                : Snow
            }
            alt="weather"
            className="weather-main-icon"
          />
          <h1 className="weather-main-name">
            {currentWeather.weather[0].main}
          </h1>
          <p className="city">
            {currentWeather.name}, {currentWeather.sys.country}
          </p>
          <h1 className="weather-temp">
            {Math.round(currentWeather.main.temp)}°C
          </h1>
        </>
      ) : (
        ''
      )}

      <form className="change-location-form" onSubmit={(e) => onSubmit(e)}>
        <label>
          <i className="fas fa-map-marker-alt"></i>
        </label>
        <input
          type="text"
          placeholder="Change Location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default MainWeather;
