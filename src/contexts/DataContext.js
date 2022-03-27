import { createContext, useState } from 'react';
import { DateTime } from 'luxon';

export const DataContext = createContext();

const DataContextProvider = (props) => {

  const date = DateTime.local(); 

  const [weatherValues, setWeatherValues] = useState(
    Array(7).fill(date).map((date, index) => {
      var nextDate = date.plus({days: index})
      return nextDate;
    }).map((date) => ({date: date.toFormat('yyyy-MM-dd'), Precipitation: 0, WindSpeed: 0}))
  );

  const submitWeatherValues = (weekday, precip, wind) => {
    setWeatherValues([...weatherValues, {date: weekday, Precipitation: precip, WindSpeed: wind}]
      );
  }

  return (
    <DataContext.Provider value={{weatherValues, submitWeatherValues}}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
