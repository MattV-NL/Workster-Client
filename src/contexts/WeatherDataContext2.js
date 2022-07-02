import { createContext, useState } from 'react';

export const WeatherDataContext2 = createContext();

let lon = -52.7314;
let lat = 47.6666;
let lang = 'en';
let units = 'metric';
let key = 'c4aa91c492141719621c2f09ce2559a3';
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang${lang}`;
let weatherDataMap;

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
  const [weatherValues2, setWeatherValues2] = useState();

  const setWeather = () => {
    setWeatherValues2(weatherDataMap);
  };

  let weatherChartArray = Array(7).fill({});

  const setupChart = () => {
    weatherChartArray = Array.from(weatherDataMap.values()).map(
      ({ dt, pop, wind_speed }) => {
        let date = new Date(dt * 1000).toDateString();
        let precip = pop * 100;
        let wind = wind_speed * 3.6;
        return { date, precip, wind };
      }
    );
    console.log(weatherChartArray);
  };

  return (
    <WeatherDataContext2.Provider
      value={{ weatherValues2, setWeather, weatherChartArray, setupChart }}
    >
      {children}
    </WeatherDataContext2.Provider>
  );
};

export default WeatherDataContextProvider2;
