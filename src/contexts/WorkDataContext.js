import { createContext, useState } from 'react';

export const WorkDataContext = createContext();

const workDataMap = new Map();

const WorkDataContextProvider = ({ children }) => {
  const [workValues, setWorkValues] = useState(
    Array.from(workDataMap.values())
  );

  const submitWorkValues = (
    formDate,
    isOutside,
    isWelding,
    isScaffolding,
    workDetails
  ) => {
    workDataMap.set(formDate, {
      formDate,
      isOutside,
      isWelding,
      isScaffolding,
      workDetails,
    });
    const nextWorkDataMap = new Map([...workDataMap]);
    setWorkValues(Array.from(nextWorkDataMap.values()));
  };

  return (
    <WorkDataContext.Provider value={{ workValues, submitWorkValues }}>
      {children}
    </WorkDataContext.Provider>
  );
};

export default WorkDataContextProvider;
