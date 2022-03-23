import { createContext, useState, useContext } from "react";
import { DataContext } from "./DataContext";

export const InputContext = createContext();

const InputContextProvider = (props) => {

  const { submitWeatherValues } = useContext(DataContext);

  const [weekday, setWeekday] = useState('');
  const [precip, setPrecip] = useState(null);
  const [wind, setWind] = useState(null);

  const weatherSubmit = (e) => {
    e.preventDefault();
    submitWeatherValues(weekday, precip, wind);
    setWeekday('');
    setPrecip(null);
    setWind(null);
  }

  const submitWeekday = ({ target: { value }}) => setWeekday(value);

  const submitPrecip = ({ target: { value }}) => setPrecip(value);

  const submitWind = ({ target: { value }}) => setWind(value);

  return (
      <InputContext.Provider value={ 
        {weekday, 
        precip, 
        wind, 
        submitWeekday, 
        submitPrecip, 
        submitWind,
        weatherSubmit} 
        }>
          {props.children} 
      </InputContext.Provider>
  )
}

export default InputContextProvider;
