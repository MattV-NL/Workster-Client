import { useContext, useCallback } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import ButtonComp from '../Inputs/Button';

const FetchButton = () => {
  const { getLocation } = useContext(WeatherDataContext);

  const handleClick = useCallback(() => {
    getLocation();
  }, [getLocation]);

  return (
    <div className='button-container'>
      <ButtonComp type='primary' onClick={handleClick}>
        Get Weather Info
      </ButtonComp>
    </div>
  );
};

export default FetchButton;
