import { createContext, useState, useContext, useCallback } from 'react';
import { DataContext } from './DataContext';

export const InputContext = createContext();

const InputContextProvider = ({ children }) => {
  const { submitWeatherValues } = useContext(DataContext);

  const [date, setDate] = useState('');
  const [precip, setPrecip] = useState('');
  const [wind, setWind] = useState('');
  const [warningDisplay, setWarningDisplay] = useState('none');

  const weatherSubmit = useCallback(
    (e) => {
      if (date && precip && wind) {
        e.preventDefault();
        submitWeatherValues(date, precip, wind);
        setDate('');
        setPrecip('');
        setWind('');
      } else {
        setWarningDisplay('flex');
      }
    },
    [submitWeatherValues, date, precip, wind]
  );

  const submitValues = ({ target: { id, value } }) => {
    if (id == 'date-input') {
      setDate(value);
    } else if (id == 'precip-input') {
      setPrecip(value);
    } else if (id == 'wind-input') {
      setWind(value);
    }
  };

  return (
    <InputContext.Provider
      value={{
        date,
        precip,
        wind,
        warningDisplay,
        submitValues,
        weatherSubmit,
        setWarningDisplay,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

export default InputContextProvider;
