import { createContext, useCallback, useState } from 'react';
import { DateTime } from 'luxon';

export const WeatherDataContext = createContext();

const createDate = () => {
  return new DateTime.utc();
};
const createWeatherValues = () =>
  new Map(
    Array(7)
      .fill(createDate())
      .map((date, days) => date.plus({ days }))
      .map((date) => ({ date: date.toISODate(), precip: 0, wind: 0 }))
      .map((data) => [parseInt(data.date.replace(/-/g, '')), data])
  );

const sortTable = (tableOrder) => (a, b) =>
  tableOrder ? a[0] - b[0] : b[0] - a[0];

const WeatherDataContextProvider = ({ children }) => {
  const [weatherValues, setWeatherValues] = useState(createWeatherValues());
  const [tableOrder, setTableOrder] = useState(false);

  const submitWeatherValues = useCallback(
    (date, precip, wind) => {
      const nextWeatherMap = new Map(weatherValues);
      nextWeatherMap.set(parseInt(date.replace(/-/g, '')), {
        date,
        precip,
        wind,
      });
      const reverseSortWeatherMap = new Map(
        [...nextWeatherMap].sort(sortTable(tableOrder))
      );
      setWeatherValues(reverseSortWeatherMap);
    },
    [weatherValues, tableOrder]
  );

  const clearWeatherValues = useCallback(() => {
    setWeatherValues(createWeatherValues());
  }, []);

  return (
    <WeatherDataContext.Provider
      value={{
        weatherValues,
        submitWeatherValues,
        clearWeatherValues,
        setWeatherValues,
        tableOrder,
        setTableOrder,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContextProvider;
