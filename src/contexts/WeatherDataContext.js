import { createContext, useCallback, useState } from 'react';
import { DateTime } from 'luxon';
import { SERVER_URL } from '../constants';

export const WeatherDataContext = createContext();
// working on table functionality with server side code
let weatherData = Array(7).fill({ dt: 0, pop: 0, wind_speed: 0 });
let weatherDataMap = new Map(weatherData.map((data) => [data.dt, data]));
// end of new

const fetchWeather = async () => {
  const response = await fetch(SERVER_URL.weather);
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
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContextProvider;
