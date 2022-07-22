import { createContext, useCallback, useState } from 'react';
import { DateTime } from 'luxon';
import { SERVER_URL } from '../constants';

export const WeatherDataContext = createContext();
let lat, lon, weatherDataMap;

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const createDate = () => {
  return new DateTime.utc();
};

const createWeatherValues = () =>
  new Map(
    Array(7)
      .fill(createDate())
      .map((date, days) => date.plus({ days }))
      .map((date) => ({
        date: date.toISODate(),
        precip: 0,
        wind: 0,
      }))
      .map((data) => [parseInt(data.date.replace(/-/g, '')), data])
  );

const replaceDate = (time) =>
  parseInt(new DateTime.fromMillis(time).toISODate().replace(/-/g, ''));

const storeWeatherData = ({ daily }) => {
  weatherDataMap = new Map(
    daily.map((day) => [replaceDate(day.dt * 1000), day])
  );
};

const WeatherDataContextProvider = ({ children }) => {
  const [weatherValues, setWeatherValues] = useState();
  const [weatherChartValues, setWeatherChartValues] =
    useState(createWeatherValues);

  const success = async (pos) => {
    const crd = pos.coords;
    lat = crd.latitude;
    lon = crd.longitude;
    const apiUrl = `${SERVER_URL.weather}${lat},${lon}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    storeWeatherData(data);
    setWeather();
    setupChart();
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  const setWeather = useCallback(() => {
    setWeatherValues(weatherDataMap);
  }, [setWeatherValues]);

  const setupChart = useCallback(() => {
    const nextWeatherArray = Array.from(weatherDataMap.values()).map(
      ({ dt, pop, wind_speed }) => {
        let date = new DateTime.fromMillis(dt * 1000).toISODate();
        let precip = pop * 100;
        let wind = wind_speed * 3.6;
        return {
          date,
          precip: parseFloat(precip.toFixed(2)),
          wind: parseFloat(wind.toFixed(2)),
        };
      }
    );

    const nextWeatherMap = new Map(
      nextWeatherArray.map((data) => [
        parseInt(data.date.replace(/-/g, '')),
        data,
      ])
    );
    setWeatherChartValues(nextWeatherMap);
  }, [setWeatherChartValues]);
  return (
    <WeatherDataContext.Provider
      value={{
        getLocation,
        weatherValues,
        weatherChartValues,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContextProvider;
