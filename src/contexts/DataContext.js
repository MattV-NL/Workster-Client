import { createContext, useState } from 'react';
import { DateTime } from 'luxon';

export const DataContext = createContext();

const date = DateTime.local(); 

const weatherArray = Array(7).fill(date).map((date, index) => {
  var nextDate = date.plus({ days: index })
  return nextDate;
  }).map((date) => ({date: date.toISODate(), precip: 0, wind: 0}));

const weatherMap = new Map();
  
weatherArray.map(({ date, precip, wind }) => {
  weatherMap.set(date, ({ date, precip, wind }));
})

const DataContextProvider = ({ children }) => {

const [weatherValues, setWeatherValues] = useState(weatherArray);

const submitWeatherValues = (date, precip, wind) => {
  if (weatherMap.has(date)) {
    weatherMap.delete(date);
    weatherMap.set(date, ({ date, precip, wind })); 
    var nextWeatherMap = new Map([...weatherMap.entries()].sort());
  } else {
    weatherMap.set(date, ({ date, precip, wind }));
    nextWeatherMap = new Map([...weatherMap.entries()].sort());
  }
  setWeatherValues(Array.from(nextWeatherMap.values()));
  }

  return (
    <DataContext.Provider value={{ weatherValues, submitWeatherValues }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
