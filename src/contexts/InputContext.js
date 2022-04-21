import { createContext, useState, useContext, useCallback } from 'react';
import { DataContext } from './DataContext';
import { DATE_KEY, PRECIP_KEY, WIND_KEY } from '../constants';

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
    if (id === DATE_KEY) {
      setDate(value);
    } else if (id === PRECIP_KEY) {
      setPrecip(value);
    } else if (id === WIND_KEY) {
      setWind(value);
    }
  };

  return (
    <InputContext.Provider
      value={{
        weatherData: {
          [DATE_KEY]: { value: date, onChange: submitValues },
          [PRECIP_KEY]: { value: precip, onChange: submitValues },
          [WIND_KEY]: { value: wind, onChange: submitValues },
        },
        warningDisplay,
        weatherSubmit,
        setWarningDisplay,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

export default InputContextProvider;
