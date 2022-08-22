import { useContext, useCallback, useState } from 'react';
import { SERVER_URL } from '../../constants';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import './account.scss';
import ButtonComp from '../Inputs/Button';

const Account = () => {
  const { authStatus } = useContext(AuthenticationContext);
  const [locations, setLocations] = useState([]);

  const getLocations = useCallback(async () => {
    const userData = authStatus;
    const response = await fetch(SERVER_URL.getLocations, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    setLocations(data);
  }, [authStatus, setLocations]);

  return (
    <div className='page-layout'>
      <div className='page'>
        <h2 className='page-header'>{authStatus.username}</h2>
        <div className='location-container'>
          <div>Saved Locations</div>
          {locations.map((item, index) => {
            index++;
            return (
              <div key={item.latitude}>
                <div className='page-label'>Location {index}</div>
                <div>Latitude: {item.latitude}</div>
                <div>Longitude: {item.longitude}</div>
              </div>
            );
          })}
          <ButtonComp type='primary' onClick={getLocations}>
            Get Locations
          </ButtonComp>
        </div>
      </div>
    </div>
  );
};

export default Account;