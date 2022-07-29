import { useContext, useCallback } from 'react';
import { WorkInputContext } from '../../contexts/WorkInputContext';
import Button from '../Inputs/Button';

const ResetButton = () => {
  const { setWarningDisplay } = useContext(WorkInputContext);

  const openWarning = useCallback(() => {
    setWarningDisplay('flex');
  }, [setWarningDisplay]);

  return <Button onClick={openWarning}>Reset Info</Button>;
};

export default ResetButton;
