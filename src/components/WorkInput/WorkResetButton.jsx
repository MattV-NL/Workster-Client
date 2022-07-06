import { useContext, useCallback } from 'react';
import { WorkInputContext } from '../../contexts/WorkInputContext';
import Button from '../Inputs/Button';

const WorkResetButton = () => {
  const { setWarningDisplay } = useContext(WorkInputContext);

  const openWarning = useCallback(() => {
    setWarningDisplay('flex');
  }, [setWarningDisplay]);

  return <Button onClick={openWarning}>Reset Work Info</Button>;
};

export default WorkResetButton;
