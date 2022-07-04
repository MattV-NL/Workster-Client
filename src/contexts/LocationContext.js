import { createContext, useState, useCallback } from 'react';
import { LOCATION_KEY } from '../constants';

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState('');

  const onChange = useCallback(
    ({ target: value }) => {
      setLocation(value);
      console.log('this is a test');
    },
    [setLocation]
  );
  return (
    <LocationContext.Provider
      value={{
        locationData: {
          [LOCATION_KEY]: {
            value: location,
            onChange,
          },
        },
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
