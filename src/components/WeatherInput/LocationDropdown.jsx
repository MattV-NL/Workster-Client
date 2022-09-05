import { useEffect, useContext, useState } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { SERVER_URL } from '../../constants';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { PositionContext } from '../../contexts/PositionContext';

const LocationDropdown = () => {
  const { authStatus } = useContext(AuthenticationContext);
  const [workLocations, setWorkLocations] = useState([]);
  const { setLatitude, setLongitude } = useContext(PositionContext);

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
        setWorkLocations(await response.json());
      } else {
        console.log({ message: 'please login to get your saved locations' });
      }
    };
    getLocations();
  }, [authStatus]);

  const newWorkLocationsArray = Array.from(workLocations).map(
    ({ latitude, longitude }) => {
      return {
        label: (
          <div
            onClick={() => {
              setLatitude(latitude);
              setLongitude(longitude);
            }}
          >
            Latitude: {latitude} Longitude: {longitude}
          </div>
        ),
      };
    }
  );

  const menu = <Menu items={newWorkLocationsArray} />;

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Saved Locations
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default LocationDropdown;
