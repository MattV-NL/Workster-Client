import { createContext, useState } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {

  const newDate = new Date();
  const d = newDate.getDate();
  const dd = (d < 10 ? ("0" + d) : d);
  const m = (newDate.getMonth() + 1);
  const mm = (m < 10 ? ("0" + m) : 0);
  const yyyy = newDate.getFullYear();

  const [weatherValues, setWeatherValues] = useState([
    {date: `${yyyy}-${mm}-${dd}`, Precipitation: 0, WindSpeed: 0},
    {date: `${yyyy}-${mm}-${dd + 1}`, Precipitation: 0, WindSpeed: 0},
    {date: `${yyyy}-${mm}-${dd + 2}`, Precipitation: 0, WindSpeed: 0},
    {date: `${yyyy}-${mm}-${dd + 3}`, Precipitation: 0, WindSpeed: 0},
    {date: `${yyyy}-${mm}-${dd + 4}`, Precipitation: 0, WindSpeed: 0},
    {date: `${yyyy}-${mm}-${dd + 5}`, Precipitation: 0, WindSpeed: 0},
    {date: `${yyyy}-${mm}-${dd + 6}`, Precipitation: 0, WindSpeed: 0}
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
