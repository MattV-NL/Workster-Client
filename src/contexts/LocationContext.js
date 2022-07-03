import { createContext, useState, useCallback } from 'react';

export const LocationContext = createContext();

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const LocationContextProvider = ({ children }) => {
  const [userLoc, setUserLoc] = useState();

  const success = useCallback(
    (pos) => {
      const crd = pos.coords;
      setUserLoc({ lat: crd.latitude, lon: crd.longitude });
    },
    [userLoc]
  );

  const getLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <LocationContext.Provider value={{ getLocation, userLoc }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
