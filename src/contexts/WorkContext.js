import { createContext, useState, useCallback } from 'react';
import { weatherInputsArray, workFormArray } from '../constants';

export const WorkContext = createContext();

const WorkContextProvider = ({ children }) => {
  const [formDate, setFormDate] = useState('');
  const [isOutside, setIsOutside] = useState(false);
  const [isWelding, setIsWelding] = useState(false);
  const [isScaffolding, setIsScaffolding] = useState(false);
  const [workDetails, setWorkDetails] = useState('');

  const setWorkArrayValues = ({ target: { id } }) => {
    const findValue = (item) => item.id === id;
    weatherInputsArray.find(findValue).value = formDate;
  };

  const workSubmit = ({ target: { value, id } }) => {
    if (id === 'work-date') {
      setFormDate(value);
      setWorkArrayValues(id);
    } else if (id === 'outside-input') {
      setIsOutside(value);
    } else if (id === 'welding-input') {
      setIsWelding(value);
    } else if (id === 'scaffolding-input') {
      setIsScaffolding(value);
    } else if (id === 'details-input') {
      setWorkDetails(value);
    }
  };

  console.log(workFormArray);

  return (
    <WorkContext.Provider
      value={{
        formDate,
        isOutside,
        isWelding,
        isScaffolding,
        workDetails,
        workSubmit,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
};

export default WorkContextProvider;
