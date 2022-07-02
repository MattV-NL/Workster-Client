import { useContext } from 'react';
import { WeatherDataContext2 } from '../../contexts/WeatherDataContext2';
import Button from '../Inputs/Button';

const FetchButton = () => {
  const { setWeather } = useContext(WeatherDataContext2);

  return <Button onClick={setWeather}>Get Weather Info</Button>;
};

export default FetchButton;
