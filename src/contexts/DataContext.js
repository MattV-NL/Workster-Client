import { createContext, useState } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {

  const [weatherValues, setWeatherValues] = useState([
    {date: '2022-03-12', Precipitation: 6, WindSpeed: 78},
    {date: '2022-03-13', Precipitation: 0, WindSpeed: 55},
    {date: '2022-03-14', Precipitation: 3, WindSpeed: 41},
    {date: '2022-03-15', Precipitation: 0, WindSpeed: 23},
    {date: '2022-03-16', Precipitation: 0, WindSpeed: 20},
    {date: '2022-03-17', Precipitation: 10, WindSpeed: 40},
    {date: '2022-03-18', Precipitation: 3, WindSpeed: 29}
  ]);

  const inputWeatherValue = (weekday, precip, wind) => {
    setWeatherValues((prevWeatherValues) =>
      prevWeatherValues.map((weatherValue) => 
        weatherValue.date === weekday ? {date: weekday, Precipitation: precip, WindSpeed: wind} : weatherValue
      ));
  }
  return (
    <DataContext.Provider value={{weatherValues, inputWeatherValue}}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
