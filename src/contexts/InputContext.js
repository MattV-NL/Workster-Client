import { createContext, useState, useContext } from "react";
import { DataContext } from "./DataContext";

export const InputContext = createContext();

const InputContextProvider = (props) => {

  const { inputWeatherValue } = useContext(DataContext);

  const [weekday, setWeekday] = useState('');
  const [precip, setPrecip] = useState(null);
  const [wind, setWind] = useState(null);

  const weatherSubmit = (e) => {
    e.preventDefault();
    inputWeatherValue(weekday, precip, wind);
    setWeekday('');
    setPrecip(null);
    setWind(null);
  }

  const takeWeekdayInput = (e) => setWeekday(e.target.value);

  const takePrecipInput = (e) => setPrecip(parseInt(e.target.value));

  const takeWindInput = (e) => setWind(parseInt(e.target.value));

  return (
      <InputContext.Provider value={ 
        {weekday, 
        precip, 
        wind, 
        takeWeekdayInput, 
        takePrecipInput, 
        takeWindInput, 
        weatherSubmit} 
        }>
          {props.children} 
      </InputContext.Provider>
  )
}

export default InputContextProvider;