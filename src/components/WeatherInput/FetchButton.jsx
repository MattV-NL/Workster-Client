import { useContext } from 'react';
import { WeatherDataContext2 } from '../../contexts/WeatherDataContext2';
import Button from '../Inputs/Button';

const FetchButton = () => {
  const { setWeather, setupChart } = useContext(WeatherDataContext2);

  const handleClick = () => {
    setWeather();
    setupChart();
  };

  return <Button onClick={handleClick}>Get Weather Info</Button>;
};

export default FetchButton;
