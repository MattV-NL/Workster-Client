import { createContext, useCallback, useState } from 'react';

export const WorkDataContext = createContext();

const sortTable = (a, b) => a[0] - b[0];

const WorkDataContextProvider = ({ children }) => {
  const [workValues, setWorkValues] = useState();
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
      const sortedWorkMap = new Map([...nextWorkDataMap].sort(sortTable));
      setWorkValues(sortedWorkMap);
    },
    [workValues]
  );
  const clearWorkValues = useCallback(() => {
    setWorkValues();
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
