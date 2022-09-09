import { useState, createContext } from 'react';

export const UnitsContext = createContext();

const UnitsContextProvider = ({ children }) => {
  const [units, setUnits] = useState('metric');
  // metric - m/s & degrees C
  // standard m/s & degrees K
  // imperial mi/hr & degrees F

  return (
    <UnitsContext.Provider value={{ units, setUnits }}>
      {children}
    </UnitsContext.Provider>
  );
};

export default UnitsContextProvider;
