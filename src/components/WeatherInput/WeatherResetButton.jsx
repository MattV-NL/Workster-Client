import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Button from '../Inputs/Button';

const WeatherResetButton = () => {
  const { clearWeatherValues } = useContext(WeatherDataContext);

  return <Button onClick={clearWeatherValues}>Clear Weather Info</Button>;
};

export default WeatherResetButton;
