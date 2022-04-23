import { createContext, useState, useContext, useCallback } from 'react';
import { WeatherDataContext } from './WeatherDataContext';
import { DATE_KEY, PRECIP_KEY, WIND_KEY } from '../constants';

export const WeatherInputContext = createContext();

const WeatherInputContextProvider = ({ children }) => {
  const { submitWeatherValues } = useContext(WeatherDataContext);

  const [date, setDate] = useState('');
  const [precip, setPrecip] = useState('');
  const [wind, setWind] = useState('');
  const [warningDisplay, setWarningDisplay] = useState('none');

  const weatherDataUpdate = useCallback(
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

  const obtainWeatherValues = ({ target: { id, value } }) => {
    if (id === DATE_KEY) {
      setDate(value);
    } else if (id === PRECIP_KEY) {
      setPrecip(value);
    } else if (id === WIND_KEY) {
      setWind(value);
    }
  };

  return (
    <WeatherInputContext.Provider
      value={{
        weatherData: {
          [DATE_KEY]: { value: date, onChange: obtainWeatherValues },
          [PRECIP_KEY]: { value: precip, onChange: obtainWeatherValues },
          [WIND_KEY]: { value: wind, onChange: obtainWeatherValues },
        },
        warningDisplay,
        weatherDataUpdate,
        setWarningDisplay,
      }}
    >
      {children}
    </WeatherInputContext.Provider>
  );
};

export default WeatherInputContextProvider;
