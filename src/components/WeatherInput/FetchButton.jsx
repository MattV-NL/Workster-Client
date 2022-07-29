import { useContext, useCallback } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Button from '../Inputs/Button';

const FetchButton = () => {
  const { getLocation } = useContext(WeatherDataContext);

  const handleClick = useCallback(() => {
    getLocation();
  }, [getLocation]);

  return (
    <div>
      <Button onClick={handleClick}>Get Weather Info</Button>
    </div>
  );
};

export default FetchButton;
