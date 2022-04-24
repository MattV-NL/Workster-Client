import { createContext, useState } from 'react';
import { DateTime } from 'luxon';

export const WorkDataContext = createContext();

const createFormDate = () => {
  return new DateTime.utc();
};

const workDataArray = Array(1)
  .fill(createFormDate())
  .map((item) => ({ formDate: item.toISODate() }));

const workDataMap = new Map();

workDataArray.map(
  ({ formDate, isOutside, isWelding, isScaffolding, workDetails }) => {
    workDataMap.set(parseInt(formDate.replace(/-/g, '')), {
      formDate,
      isOutside,
      isWelding,
      isScaffolding,
      workDetails,
    });
  }
);

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
    workDataMap.set(parseInt(formDate.replace(/-/g, '')), {
      formDate,
      isOutside,
      isWelding,
      isScaffolding,
      workDetails,
    });
    const nextWorkDataMap = new Map(
      [...workDataMap].sort((a, b) => a[0] - b[0])
    );
    setWorkValues(Array.from(nextWorkDataMap.values()));
  };

  return (
    <WorkDataContext.Provider value={{ workValues, submitWorkValues }}>
      {children}
    </WorkDataContext.Provider>
  );
};

export default WorkDataContextProvider;
