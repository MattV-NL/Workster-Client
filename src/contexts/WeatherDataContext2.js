import { createContext, useContext, useState } from 'react';
import { LocationContext } from './LocationContext';

export const WeatherDataContext2 = createContext();
let weatherDataMap;
let userLoc = {
  lat: 0,
  lon: 0,
};

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const success = (pos) => {
  const crd = pos.coords;
  userLoc.lat = crd.latitude;
  userLoc.lon = crd.longitude;
  console.log(userLoc);
};

navigator.geolocation.getCurrentPosition(success, error, options);

let lang = 'en';
let units = 'metric';
let key = 'c4aa91c492141719621c2f09ce2559a3';
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${userLoc.lat}&lon=${userLoc.lon}&appid=${key}&units=${units}&lang${lang}`;

const fetchWeather = async () => {
  const response = await fetch(url);
  const data = await response.json();
  storeWeatherData(data);
};

const storeWeatherData = ({ daily }) => {
  weatherDataMap = new Map(daily.map((day) => [day.dt, day]));
};

fetchWeather().catch((err) => console.log(err));

const WeatherDataContextProvider2 = ({ children }) => {
  const { userLoc } = useContext(LocationContext);
  const [weatherValues2, setWeatherValues2] = useState();
  const [weatherChartValues, setWeatherChartValues] = useState(
    Array(7).fill({})
  );

  const setWeather = () => {
    setWeatherValues2(weatherDataMap);
  };

  const setupChart = () => {
    setWeatherChartValues(
      Array.from(weatherDataMap.values()).map(({ dt, pop, wind_speed }) => {
        let date = new Date(dt * 1000).toDateString();
        let precip = pop * 100;
        let wind = wind_speed * 3.6;
        return {
          date,
          precip: parseFloat(precip.toFixed(2)),
          wind: parseFloat(wind.toFixed(2)),
        };
      })
    );
  };

  return (
    <WeatherDataContext2.Provider
      value={{ weatherValues2, setWeather, weatherChartValues, setupChart }}
    >
      {children}
    </WeatherDataContext2.Provider>
  );
};

export default WeatherDataContextProvider2;
