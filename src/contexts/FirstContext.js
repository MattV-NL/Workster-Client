import { createContext, useState } from 'react';

export const FirstContext = createContext();

const FirstContextProvider = (props) => {

  const [weatherValues, setWeatherValues] = useState([
    {name: 'Monday', Precipitation: 20, WindSpeed: 65},
    {name: 'Tuesday', Precipitation: 10, WindSpeed: 50},
    {name: 'Wednesday', Precipitation: 0, WindSpeed: 25},
    {name: 'Thursday', Precipitation: 40, WindSpeed: 85},
    {name: 'Friday', Precipitation: 0, WindSpeed: 55},
    {name: 'Saturday', Precipitation: 0, WindSpeed: 35},
    {name: 'Sunday', Precipitation: 15, WindSpeed: 60}
  ]);

  const inputWeatherValue = (weekday, precip, wind) => {
    setWeatherValues((prevWeatherValues) =>
      prevWeatherValues.map((weatherValue) => 
        weatherValue.name === weekday ? {name: weekday, Precipitation: precip, WindSpeed: wind} : weatherValue
      ));
  }
  return (
    <FirstContext.Provider value={{weatherValues, inputWeatherValue}}>
      {props.children}
    </FirstContext.Provider>
  );
}

export default FirstContextProvider;
