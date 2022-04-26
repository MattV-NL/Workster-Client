import { createContext, useState } from 'react';
import { DateTime } from 'luxon';

export const WeatherDataContext = createContext();

const createDate = () => {
  return new DateTime.utc();
};
const createWeatherValues = () =>
  new Map(
    Array(7)
      .fill(createDate())
      .map((date, index) => {
        let nextDate = date.plus({ days: index });
        return nextDate;
      })
      .map((date) => ({ date: date.toISODate(), precip: 0, wind: 0 }))
      .map((data) => [parseInt(data.date.replace(/-/g, '')), data])
  );

const WeatherDataContextProvider = ({ children }) => {
  const [weatherValues, setWeatherValues] = useState(createWeatherValues());

  const submitWeatherValues = (date, precip, wind) => {
    const nextWeatherMap = new Map(weatherValues);
    nextWeatherMap.set(parseInt(date.replace(/-/g, '')), {
      date,
      precip,
      wind,
    });
    const sortedWeatherMap = new Map(
      [...nextWeatherMap].sort((a, b) => a[0] - b[0])
    );
    setWeatherValues(sortedWeatherMap);
  };

  return (
    <WeatherDataContext.Provider value={{ weatherValues, submitWeatherValues }}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContextProvider;
