import { useContext } from 'react';
import { LocationContext } from '../../contexts/LocationContext';
import { WeatherDataContext2 } from '../../contexts/WeatherDataContext2';
import Button from '../Inputs/Button';

const FetchButton = () => {
  const { setWeather, setupChart } = useContext(WeatherDataContext2);
  const { getLocation } = useContext(LocationContext);

  const handleClick = () => {
    setWeather();
    setupChart();
    getLocation();
  };

  return <Button onClick={handleClick}>Get Weather Info</Button>;
};

export default FetchButton;
