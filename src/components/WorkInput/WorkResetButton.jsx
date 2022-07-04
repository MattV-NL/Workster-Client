import { useContext, useCallback } from 'react';
import { WeatherInputContext } from '../../contexts/WeatherInputContext';
import Button from '../Inputs/Button';

const WorkResetButton = () => {
  const { setWarningDisplay } = useContext(WeatherInputContext);

  const openWarning = useCallback(() => {
    setWarningDisplay('flex');
  }, [setWarningDisplay]);

  return <Button onClick={openWarning}>Reset Work Info</Button>;
};

export default WorkResetButton;
