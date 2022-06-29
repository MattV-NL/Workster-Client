import { createContext, useState, useCallback } from 'react';
import { API_KEY } from '../constants';

export const WeatherDataContext2 = createContext();

let lon = -52.7314;
let lat = 47.6666;
let lang = 'en';
let units = 'metric';
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}&lang${lang}`;

const WeatherDataContextProvider2 = ({ children }) => {
  const [weatherValues2, setWeatherValues2] = useState();

  const fetchWeather = () => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        storeWeatherData(data);
      })
      .catch(console.err);
  };

  const storeWeatherData = ({ daily }) => {
    const weatherDataMap = new Map(daily.map((day) => [day.dt, day]));
    setWeatherValues2(weatherDataMap);
    console.log(weatherValues2);
  };

  const initWeatherValues = useCallback(fetchWeather, [fetchWeather]);

  return (
    <WeatherDataContext2.Provider
      value={{ weatherValues2, fetchWeather, initWeatherValues }}
    >
      {children}
    </WeatherDataContext2.Provider>
  );
};

export default WeatherDataContextProvider2;
