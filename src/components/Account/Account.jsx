import { useContext, useState, useEffect } from 'react';
import { SERVER_URL } from '../../constants';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import './account.scss';

const Account = () => {
  const { authStatus, setIsAccountModalVisible } = useContext(
    AuthenticationContext
  );
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
      const userData = authStatus;
      if (await authStatus.auth) {
        const response = await fetch(SERVER_URL.getLocations, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
        const data = await response.json();
        console.log(data);
        setLocations(data);
      } else {
        setIsAccountModalVisible(true);
        console.log({ message: 'please login to get your saved locations' });
      }
    };
    getLocations();
  }, [authStatus, setLocations, setIsAccountModalVisible]);

  return (
    <div className='page-layout'>
      <div className='page'>
        <h2 className='page-header'>{authStatus.username}</h2>
        <div className='location-container'>
          <div className='page-label'>Saved Locations</div>
          {locations.map((item) => {
            return (
              <div key={item.latitude}>
                <div>Latitude: {item.latitude}</div>
                <div>Longitude: {item.longitude}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Account;
