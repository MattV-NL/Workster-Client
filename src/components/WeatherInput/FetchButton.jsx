import { useContext, useCallback } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { PositionContext } from '../../contexts/PositionContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import ButtonComp from '../Inputs/Button';

const FetchButton = () => {
  const { getLocation, sendLocation } = useContext(WeatherDataContext);
  const { saveLocation } = useContext(PositionContext);
  const { authStatus } = useContext(AuthenticationContext);

  const handleClick = useCallback(async () => {
    if (saveLocation) {
      if (await authStatus.auth) {
        sendLocation();
        getLocation();
      } else {
        console.log({ message: 'please login to save location data' });
      }
    } else {
      getLocation();
    }
  }, [getLocation, saveLocation, sendLocation, authStatus]);

  return (
    <div className='button-container'>
      <ButtonComp type='primary' onClick={handleClick}>
        Get Weather Info
      </ButtonComp>
    </div>
  );
};

export default FetchButton;
