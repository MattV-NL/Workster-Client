import { createContext, useState } from 'react';
import { DateTime } from 'luxon';

export const WeatherDataContext = createContext();

const createDate = () => {
  return new DateTime.utc();
};

const weatherArray = Array(7)
  .fill(createDate())
  .map((date, index) => {
    let nextDate = date.plus({ days: index });
    return nextDate;
  })
  .map((date) => ({ date: date.toISODate(), precip: 0, wind: 0 }));

const weatherMap = new Map();

weatherArray.map(({ date, precip, wind }) => {
  weatherMap.set(parseInt(date.replace(/-/g, '')), { date, precip, wind });
});

const WeatherDataContextProvider = ({ children }) => {
  const [weatherValues, setWeatherValues] = useState(weatherArray);

  const submitWeatherValues = (date, precip, wind) => {
    weatherMap.set(parseInt(date.replace(/-/g, '')), { date, precip, wind });
    const nextWeatherMap = new Map([...weatherMap].sort((a, b) => a[0] - b[0]));
    setWeatherValues(Array.from(nextWeatherMap.values()));
  };

  return (
    <WeatherDataContext.Provider value={{ weatherValues, submitWeatherValues }}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContextProvider;
