import { createContext, useState } from 'react';
import { workFormArray } from '../constants';

export const WorkContext = createContext();

const WorkContextProvider = ({ children }) => {
  const [formDate, setFormDate] = useState('');
  const [isOutside, setIsOutside] = useState(false);
  const [isWelding, setIsWelding] = useState(false);
  const [isScaffolding, setIsScaffolding] = useState(false);
  const [workDetails, setWorkDetails] = useState('');

  const workSubmit = ({ target: { value, id } }) => {
    if (id === 'work-date') {
      setFormDate(value);
    } else if (id === 'outside-input') {
      setIsOutside(true);
    } else if (id === 'welding-input') {
      setIsWelding(true);
    } else if (id === 'scaffolding-input') {
      setIsScaffolding(true);
    } else if (id === 'details-input') {
      setWorkDetails(value);
    }
  };

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
