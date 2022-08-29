import { useContext, useCallback } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { PositionContext } from '../../contexts/PositionContext';
import ButtonComp from '../Inputs/Button';
import { SERVER_URL } from '../../constants';

const FetchButton = () => {
  const { getLocation, sendLocation } = useContext(WeatherDataContext);
  const { saveLocation } = useContext(PositionContext);

  const handleClick = useCallback(async () => {
    if (saveLocation) {
      const response = await fetch(SERVER_URL.authCheck, {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      if (data.auth) {
        sendLocation();
        getLocation();
      } else {
        console.log({ message: 'please login to save location data' });
      }
    } else {
      getLocation();
    }
  }, [getLocation, saveLocation, sendLocation]);

  return (
    <div className='button-container'>
      <ButtonComp type='primary' onClick={handleClick}>
        Get Weather Info
      </ButtonComp>
    </div>
  );
};

export default FetchButton;
