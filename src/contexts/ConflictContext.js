import { useContext, useState, createContext, useEffect } from 'react';
import { WeatherDataContext } from './WeatherDataContext';
import { WorkDataContext } from './WorkDataContext';
import { UserSettingsContext } from './UserSettingsContext';
import { replaceDate } from '../restAPI/replaceDate';

export const ConflictContext = createContext();

const ConflictContextProvider = ({ children }) => {
  const { rainConflict, snowConflict, windConflict, units } =
    useContext(UserSettingsContext);
  const { weatherValues } = useContext(WeatherDataContext);
  const { workValues } = useContext(WorkDataContext);
  const [isConflict2, setIsConflict2] = useState(null);

  useEffect(() => {
    const weatherCompareValues = new Map(
      Array.from(weatherValues.values())
        .map(({ dt, rain, snow, wind_speed }) => {
          const date = replaceDate(dt * 1000);
          let windSpeed;
          if (units === 'imperial') {
            return (windSpeed = wind_speed);
          } else {
            windSpeed = wind_speed * 3.6;
          }
          if (!snow) {
            snow = 0;
          } else {
            snow = snow * 100;
          }

          return {
            date,
            rain,
            snow,
            windSpeed,
          };
        })
        .map((item) => [item.date, item])
    );

    const newConflict = new Map(
      [...new Set([...weatherCompareValues.keys(), ...workValues.keys()])].map(
        (date) => {
          const { rain, snow, wind } = weatherCompareValues.get(date) || {};
          const { isOutside, isWelding, isScaffolding } =
            workValues.get(date) || {};

          const conflict = !!(
            (rain > rainConflict ||
              snow > snowConflict ||
              wind > windConflict) &&
            (isOutside || isWelding || isScaffolding)
          );

          return [
            date,
            {
              date,
              conflict,
            },
          ];
        }
      )
    );

    setIsConflict2(newConflict);
  }, [
    weatherValues,
    workValues,
    windConflict,
    rainConflict,
    snowConflict,
    units,
  ]);
  return (
    <ConflictContext.Provider
      value={{
        isConflict2,
      }}
    >
      {children}
    </ConflictContext.Provider>
  );
};

export default ConflictContextProvider;
