import { createContext, useCallback, useState } from 'react';
import { DateTime } from 'luxon';

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
};

let lang = 'en';
let units = 'metric';
let key = 'c4aa91c492141719621c2f09ce2559a3';
let weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${userLoc.lat}&lon=${userLoc.lon}&appid=${key}&units=${units}&lang${lang}`;

const fetchWeather = async () => {
  const response = await fetch(weatherURL);
  const data = await response.json();
  storeWeatherData(data);
};

const createDate = (time) =>
  parseInt(new DateTime.fromMillis(time).toISODate().replace(/-/g, ''));

const storeWeatherData = ({ daily }) => {
  weatherDataMap = new Map(
    daily.map((day) => [createDate(day.dt * 1000), day])
  );
};

fetchWeather().catch((err) => console.log(err));

const WeatherDataContextProvider2 = ({ children }) => {
  const [weatherValues2, setWeatherValues2] = useState();
  const [weatherChartValues, setWeatherChartValues] = useState(
    Array(7).fill({})
  );

  const setWeather = useCallback(() => {
    setWeatherValues2(weatherDataMap);
  }, [setWeatherValues2]);

  const setupChart = useCallback(() => {
    setWeatherChartValues(
      Array.from(weatherDataMap.values()).map(({ dt, pop, wind_speed }) => {
        let date = new DateTime.fromMillis(dt * 1000).toISODate();
        let precip = pop * 100;
        let wind = wind_speed * 3.6;
        return {
          date,
          precip: parseFloat(precip.toFixed(2)),
          wind: parseFloat(wind.toFixed(2)),
        };
      })
    );
  }, [setWeatherChartValues]);

  const getLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  const weatherChartMap = new Map(
    weatherChartValues.map((data) => [data.date, data])
  );

  return (
    <WeatherDataContext2.Provider
      value={{
        weatherValues2,
        setWeather,
        weatherChartValues,
        weatherChartMap,
        setupChart,
        getLocation,
      }}
    >
      {children}
    </WeatherDataContext2.Provider>
  );
};

export default WeatherDataContextProvider2;
