import { createContext, useCallback, useState } from 'react';
import { DateTime } from 'luxon';

export const WeatherDataContext = createContext();
// working on table functionality with server side code
let weatherData = Array(7).fill({ dt: 0, pop: 0, wind_speed: 0 });
let weatherDataMap = new Map(weatherData.map((data) => [data.dt, data]));
// end of new
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
// let weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${userLoc.lat}&lon=${userLoc.lon}&appid=${key}&units=${units}&lang${lang}`;
let weatherURL = `http://localhost:8080/api?lat=${userLoc.lat}&lon=${userLoc.lon}&appid=${key}&units=${units}&lang${lang}`;

const fetchWeather = async () => {
  const response = await fetch(weatherURL);
  const data = await response.json();
  console.log(data);
  storeWeatherData(data);
};

const createDate = (time) =>
  parseInt(new DateTime.fromMillis(time).toISODate().replace(/-/g, ''));

const storeWeatherData = ({ daily }) => {
  weatherDataMap = new Map(
    daily.map((day) => [createDate(day.dt * 1000), day])
  );
};

// fetchWeather().catch((err) => console.log(err));

const WeatherDataContextProvider = ({ children }) => {
  const [weatherValues, setWeatherValues] = useState();
  const [weatherChartValues, setWeatherChartValues] = useState(
    Array(7).fill({})
  );

  const setWeather = useCallback(() => {
    setWeatherValues(weatherDataMap);
  }, [setWeatherValues]);

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
    <WeatherDataContext.Provider
      value={{
        fetchWeather,
        weatherValues,
        setWeather,
        weatherChartValues,
        weatherChartMap,
        setupChart,
        getLocation,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContextProvider;
