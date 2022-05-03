import { createContext, useCallback, useContext, useState } from 'react';
import {
  DETAILS_KEY,
  OUTSIDE_KEY,
  SCAFF_KEY,
  WELD_KEY,
  WORK_DATE_KEY,
} from '../constants';
import { WeatherInputContext } from './WeatherInputContext';
import { WorkDataContext } from './WorkDataContext';

export const WorkInputContext = createContext();

const WorkInputContextProvider = ({ children }) => {
  const { submitWorkValues } = useContext(WorkDataContext);
  const { setWarningDisplay } = useContext(WeatherInputContext);

  const [date, setDate] = useState('');
  const [isOutside, setIsOutside] = useState(false);
  const [isWelding, setIsWelding] = useState(false);
  const [isScaffolding, setIsScaffolding] = useState(false);
  const [workDetails, setWorkDetails] = useState('');

  const workDataUpdate = useCallback(
    (e) => {
      if (date && workDetails) {
        e.preventDefault();
        submitWorkValues(
          date,
          isOutside,
          isWelding,
          isScaffolding,
          workDetails
        );
        setDate('');
        setIsOutside(false);
        setIsWelding(false);
        setIsScaffolding(false);
        setWorkDetails('');
      } else {
        setWarningDisplay('flex');
      }
    },
    [
      date,
      isOutside,
      isWelding,
      isScaffolding,
      workDetails,
      setWarningDisplay,
      submitWorkValues,
    ]
  );

  const onChange = useCallback(
    ({ setterFunction, isBoolean = false }) =>
      ({ target: { value } }) =>
        setterFunction(isBoolean ? value !== true.toString() : value),
    []
  );

  return (
    <WorkInputContext.Provider
      value={{
        workData: {
          [WORK_DATE_KEY]: {
            value: date,
            onChange: onChange({ setterFunction: setDate }),
          },
          [OUTSIDE_KEY]: {
            value: isOutside,
            onChange: onChange({
              setterFunction: setIsOutside,
              isBoolean: true,
            }),
          },
          [WELD_KEY]: {
            value: isWelding,
            onChange: onChange({
              setterFunction: setIsWelding,
              isBoolean: true,
            }),
          },
          [SCAFF_KEY]: {
            value: isScaffolding,
            onChange: onChange({
              setterFunction: setIsScaffolding,
              isBoolean: true,
            }),
          },
          [DETAILS_KEY]: {
            value: workDetails,
            onChange: onChange({ setterFunction: setWorkDetails }),
          },
        },
        workDataUpdate,
      }}
    >
      {children}
    </WorkInputContext.Provider>
  );
};

export default WorkInputContextProvider;
