import { useEffect, useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { PositionContext } from '../../contexts/PositionContext';
import { getLocations } from '../../restAPI/getAccountLocations';

const LocationDropdown = () => {
  const { authStatus } = useContext(AuthenticationContext);
  const { setLatitude, setLongitude, accountLocations, setAccountLocations } =
    useContext(PositionContext);

  useEffect(() => {
    getLocations(authStatus, setAccountLocations);
  }, [authStatus, setAccountLocations]);

  const newWorkLocationsArray = Array.from(accountLocations).map(
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
