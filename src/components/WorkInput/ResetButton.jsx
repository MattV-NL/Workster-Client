import { useContext, useCallback } from 'react';
import { WorkInputContext } from '../../contexts/WorkInputContext';
import Button2 from '../Inputs/Button';

const ResetButton = () => {
  const { setWarningDisplay } = useContext(WorkInputContext);

  const openWarning = useCallback(() => {
    setWarningDisplay('flex');
  }, [setWarningDisplay]);

  return (
    <div className='button-container'>
      <Button2 type='primary' onClick={openWarning}>
        Reset Info
      </Button2>
    </div>
  );
};

export default ResetButton;
