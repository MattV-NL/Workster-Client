import { ConflictContext } from '../../contexts/ConflictContext.js';
import { useContext, useEffect, useState } from 'react';

const ConflictMessage = () => {
  const { isConflict } = useContext(ConflictContext);
  const [conflictingDates, setConflictingDates] = useState([]);
  const [areThereDateConflicts, setAreThereDateConflicts] = useState(false);

  useEffect(() => {
    const isThereConflict = Array.from(isConflict.values()).map(
      (date) => date.conflict
    );
    if (isThereConflict.includes(true)) {
      const returnedDates = Array.from(isConflict.values()).map(
        ({ dateString, conflict }) => {
          if (conflict) {
            return dateString;
          } else {
            return undefined;
          }
        }
      );
      setConflictingDates(returnedDates.filter((date) => date !== undefined));
      setAreThereDateConflicts(true);
    } else {
      setAreThereDateConflicts(false);
    }
  }, [isConflict, setConflictingDates, setAreThereDateConflicts]);

  return (
    <div className='conflict-message'>
      <div>
        {areThereDateConflicts
          ? `There is some work you have scheduled you may want to take another look at. They are:`
          : ''}
      </div>
      <div>{areThereDateConflicts ? `${conflictingDates.toString()}` : ''}</div>
    </div>
  );
};

export default ConflictMessage;
