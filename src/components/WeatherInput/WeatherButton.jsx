import { useContext } from 'react';
import { WeatherInputContext } from '../../contexts/WeatherInputContext';
import Button from '../Inputs/Button';

const WeatherButton = () => {
  const { weatherDataUpdate } = useContext(WeatherInputContext);

  return <Button onClick={weatherDataUpdate}>Enter Weather Info</Button>;
};

export default WeatherButton;
