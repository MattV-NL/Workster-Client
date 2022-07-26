import { createContext, useState, useCallback } from 'react';
import { GEOLOCATION_KEY, LATITUDE_KEY, LONGITUDE_KEY } from '../constants';

export const PositionContext = createContext();

const PositionContextProvider = ({ children }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [geoLocate, setGeoLocate] = useState(false);

  const onChange = useCallback(
    ({ setterFunction, isBoolean = false }) =>
      ({ target: { value } }) =>
        setterFunction(isBoolean ? value !== true.toString() : value),
    []
  );

  return (
    <PositionContext.Provider
      value={{
        positionData: {
          [LATITUDE_KEY]: {
            value: latitude,
            onChange: onChange({ setterFunction: setLatitude }),
          },
          [LONGITUDE_KEY]: {
            value: longitude,
            onChange: onChange({ setterFunction: setLongitude }),
          },
          [GEOLOCATION_KEY]: {
            value: geoLocate,
            onChange: onChange({
              setterFunction: setGeoLocate,
              isBoolean: true,
            }),
          },
        },
      }}
    >
      {children}
    </PositionContext.Provider>
  );
};
export default PositionContextProvider;
