import { createContext, useCallback, useState } from 'react';
import { DateTime } from 'luxon';

export const WorkDataContext = createContext();

const createFormDate = () => {
  return new DateTime.utc();
};

const createWorkValues = () =>
  new Map(
    Array(7)
      .fill(createFormDate())
      .map((date, days) => date.plus({ days }))
      .map((date) => ({
        date: date.toISODate(),
        isOutside: null,
        isWelding: null,
        isScaffolding: null,
        workDetails: '',
        workLocation: {
          latitude: 0,
          longitude: 0,
        },
      }))
      .map((data) => [parseInt(data.date.replace(/-/g, '')), data])
  );

const WorkDataContextProvider = ({ children }) => {
  const [workValues, setWorkValues] = useState(createWorkValues());
  const [isWorkDetailsVisible, setIsWorkDetailsVisible] = useState(false);

  const submitWorkValues = useCallback(
    (date, isOutside, isWelding, isScaffolding, workDetails, workLocation) => {
      const nextWorkDataMap = new Map(workValues);
      nextWorkDataMap.set(parseInt(date.replace(/-/g, '')), {
        date,
        isOutside,
        isWelding,
        isScaffolding,
        workDetails,
        workLocation,
      });
      setWorkValues(nextWorkDataMap);
    },
    [workValues]
  );
  const clearWorkValues = useCallback(() => {
    setWorkValues(createWorkValues());
  }, []);

  return (
    <WorkDataContext.Provider
      value={{
        workValues,
        setWorkValues,
        submitWorkValues,
        clearWorkValues,
        isWorkDetailsVisible,
        setIsWorkDetailsVisible,
      }}
    >
      {children}
    </WorkDataContext.Provider>
  );
};

export default WorkDataContextProvider;
