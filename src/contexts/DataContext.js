import { createContext, useState } from 'react';
import { DateTime } from 'luxon';

export const DataContext = createContext();

const DataContextProvider = (props) => {

  const date = DateTime.now().toFormat('yyyy-MM-dd');
  const date1 = DateTime.now().plus({days: 1}).toFormat('yyyy-MM-dd');
  const date2 = DateTime.now().plus({days: 2}).toFormat('yyyy-MM-dd');
  const date3 = DateTime.now().plus({days: 3}).toFormat('yyyy-MM-dd');
  const date4 = DateTime.now().plus({days: 4}).toFormat('yyyy-MM-dd');
  const date5 = DateTime.now().plus({days: 5}).toFormat('yyyy-MM-dd');
  const date6 = DateTime.now().plus({days: 6}).toFormat('yyyy-MM-dd');

  const [weatherValues, setWeatherValues] = useState([
    {date: date, Precipitation: 0, WindSpeed: 0},
    {date: date1, Precipitation: 0, WindSpeed: 0},
    {date: date2, Precipitation: 0, WindSpeed: 0},
    {date: date3, Precipitation: 0, WindSpeed: 0},
    {date: date4, Precipitation: 0, WindSpeed: 0},
    {date: date5, Precipitation: 0, WindSpeed: 0},
    {date: date6, Precipitation: 0, WindSpeed: 0}
  ]);

  const submitWeatherValues = (weekday, precip, wind) => {
    setWeatherValues((prevWeatherValues) =>
      prevWeatherValues.map((weatherValue) => 
        weatherValue.date === weekday ? {date: weekday, Precipitation: precip, WindSpeed: wind} : weatherValue
      ));
  }

  return (
    <DataContext.Provider value={{weatherValues, submitWeatherValues}}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
