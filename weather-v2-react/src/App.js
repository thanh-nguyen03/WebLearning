import MainWeather from './components/MainWeather';
import WeatherDetail from './components/WeatherDetail';
import { useEffect, useState } from 'react';
import WeatherForecast from './components/WeatherForecast';

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});
  const [bg, setBg] = useState('clear');
  const [toneBg, setToneBg] = useState('warm');
  const [coord, setCoord] = useState({
    latitude: 0,
    longitude: 0,
  });

  const api = {
    key: '758a51e2ca590d36c959659e7117a877',
    current_base: 'https://api.openweathermap.org/data/2.5/weather?',
    forecast_onecall_base: 'https://api.openweathermap.org/data/2.5/onecall?',
    forecasr_5day_base: 'https://api.openweathermap.org/data/2.5/forecast?',
  };

  // Current Weather Search
  const onCurrentSearch = (q) => {
    fetch(`${api.current_base}q=${q}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentWeather(data);
        setCoord({
          latitude: data.coord.lat,
          longitude: data.coord.lon,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (coord.latitude !== 0 && coord.longitude !== 0) {
      onForecast(coord.latitude, coord.longitude);
    }
  }, [coord]);

  // Fetch Next Five Day Forecast Weather
  const onForecast = (lat, lon) => {
    fetch(
      `${api.forecast_onecall_base}lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setForecastWeather(data);
      });
  };

  // Update Backgrounds and Fetch forecast
  useEffect(() => {
    if (typeof currentWeather.weather !== 'undefined') {
      if (currentWeather.weather[0].main === 'Clouds') {
        setBg('clouds');
      } else if (currentWeather.weather[0].main === 'Rain') {
        setBg('rain');
      } else if (currentWeather.weather[0].main === 'Snow') {
        setBg('snow');
      } else if (currentWeather.weather[0].main === 'Smoke') {
        setBg('fog');
      } else if (currentWeather.weather[0].main === 'Clear') {
        setBg('clear');
      } else if (currentWeather.weather[0].main === 'Thunderstorm') {
        setBg('thunderstorm');
      } else setBg('clear');
    }

    if (typeof currentWeather.weather !== 'undefined') {
      if (currentWeather.main.temp >= 15) {
        setToneBg('warm');
      } else setToneBg('cold');
    }
  }, [currentWeather.weather]);

  // Get today and the next 5 day's date
  const getForecastDay = () => {
    const dateArr = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const today = new Date();
    const todayDay = today.getDay();
    const nextFiveDay = [];

    // Loop to get 5 day
    for (let i = todayDay; i < todayDay + 5; i++) {
      if (i <= 6) {
        nextFiveDay.push(dateArr[i]);
      } else {
        nextFiveDay.push(dateArr[i - 7]);
      }
    }
    return nextFiveDay;
  };

  return (
    <div className={`App ${bg} ${toneBg}`}>
      <div className="app-today">
        <MainWeather
          onCurrentSearch={onCurrentSearch}
          currentWeather={currentWeather}
          getForecastDay={getForecastDay}
          onForecast={onForecast}
        />
        <WeatherDetail currentWeather={currentWeather} />
      </div>

      {typeof currentWeather.weather !== 'undefined' ? (
        <div className="app-forecast">
          <WeatherForecast
            nextFiveDay={getForecastDay()}
            forecastWeather={forecastWeather}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
