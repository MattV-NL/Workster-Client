import { ConflictContext } from '../../contexts/ConflictContext.js';
import { useContext, useCallback } from 'react';

const ConflcitMessage = () => {
  const { isConflict2 } = useContext(ConflictContext);

  const checkForConflict = useCallback(() => {
    const isThereConflict = Array.from(isConflict2.values()).map(
      (date) => date.confict
    );
    if (isThereConflict.includes(true)) {
      // show dates for conflicts

      return;
    } else {
      // do nothing
      return;
    }
  }, [isConflict2]);

  return <div>{checkForConflict()}</div>;
};

export default ConflictMessage;
