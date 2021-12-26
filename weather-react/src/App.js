import { useEffect, useState } from 'react';
import Header from './components/Header';
import Info from './components/Info';

function App() {
  const api = {
    key: '758a51e2ca590d36c959659e7117a877',
    base: 'api.openweathermap.org/data/2.5/',
  };
  const [weather, setWeather] = useState({});
  const [bg, setBg] = useState('a');

  const onSearch = (q) => {
    fetch(`https://${api.base}weather?q=${q}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  useEffect(() => {
    if (typeof weather.main != 'undefined') {
      if (weather.main.temp >= 28) {
        setBg('warm');
      } else if (weather.main.temp >= 20 && weather.main.temp < 28) {
        setBg('fair');
      } else if (weather.main.temp >= 10 && weather.main.temp < 20) {
        setBg('cloud');
      } else {
        setBg('cold');
      }
    } else return;
  }, [weather]);

  return (
    <div className={`App ${bg}`}>
      <Header onSearch={onSearch} />
      {typeof weather.main != 'undefined' ? <Info weather={weather} /> : ''}
    </div>
  );
}

export default App;
