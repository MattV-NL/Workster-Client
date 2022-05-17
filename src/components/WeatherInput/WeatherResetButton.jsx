import Button from '../Inputs/Button';
import { useCallback, useContext } from 'react';
import { WeatherInputContext } from '../../contexts/WeatherInputContext';

const WeatherResetButton = () => {
  const { setWarningDisplay } = useContext(WeatherInputContext);

  const openWarning = useCallback(() => {
    setWarningDisplay('flex');
  }, [setWarningDisplay]);
  return <Button onClick={openWarning}>Clear Weather Info</Button>;
};

export default WeatherResetButton;
