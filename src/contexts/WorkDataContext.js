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
      }))
      .map((data) => [parseInt(data.date.replace(/-/g, '')), data])
  );

const sortTable = (tableOrder) => (a, b) =>
  tableOrder ? a[0] - b[0] : b[0] - a[0];

const WorkDataContextProvider = ({ children }) => {
  const [workValues, setWorkValues] = useState(createWorkValues());
  const [tableOrder, setTableOrder] = useState(false);
  const [isWorkDetailsVisible, setIsWorkDetailsVisible] = useState(false);

  const submitWorkValues = useCallback(
    (date, isOutside, isWelding, isScaffolding, workDetails) => {
      const nextWorkDataMap = new Map(workValues);
      nextWorkDataMap.set(parseInt(date.replace(/-/g, '')), {
        date,
        isOutside,
        isWelding,
        isScaffolding,
        workDetails,
      });
      const sortWorkMap = new Map(
        [...nextWorkDataMap].sort(sortTable(tableOrder))
      );
      setWorkValues(sortWorkMap);
    },
    [workValues, tableOrder]
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
        tableOrder,
        setTableOrder,
        isWorkDetailsVisible,
        setIsWorkDetailsVisible,
      }}
    >
      {children}
    </WorkDataContext.Provider>
  );
};

export default WorkDataContextProvider;
