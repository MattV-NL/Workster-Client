import { createContext, useState } from 'react';

export const PositionContext = createContext();

const PositionContextProvider = ({ children }) => {
  const [position, setPosition] = useState({ lat: '', lon: '' });

  const onChange = ({ value }) => {
    setPosition(value);
  };

  const positionUpdate = () => {};

  return (
    <PositionContext.Provider
      value={{
        onChange,
      }}
    >
      {children}
    </PositionContext.Provider>
  );
};
export default PositionContextProvider;
