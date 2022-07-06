import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Button from '../Inputs/Button';

const FetchButton = () => {
  const { setWeather, setupChart } = useContext(WeatherDataContext);

  const handleClick = () => {
    setWeather();
    setupChart();
  };

  return <Button onClick={handleClick}>Get Weather Info</Button>;
};

export default FetchButton;
