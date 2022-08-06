import { useContext, useCallback } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Button2 from '../Inputs/Button';

const FetchButton = () => {
  const { getLocation } = useContext(WeatherDataContext);

  const handleClick = useCallback(() => {
    getLocation();
  }, [getLocation]);

  return (
    <div className='button-container'>
      <Button2 type='primary' onClick={handleClick}>
        Get Weather Info
      </Button2>
    </div>
  );
};

export default FetchButton;
