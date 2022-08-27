import { useEffect, useContext, useState } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { SERVER_URL } from '../../constants';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { WorkInputContext } from '../../contexts/WorkInputContext';

const WorkLocationsDropdown = () => {
  const { authStatus } = useContext(AuthenticationContext);
  const { setWorkLocation } = useContext(WorkInputContext);
  const [workLocations, setWorkLocations] = useState([]);
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
        setWorkLocations(data);
      } else {
        console.log({ message: 'please login to get your saved locations' });
      }
    };
    getLocations();
  }, [authStatus]);

  const newWorkLocationsArray = Array.from(workLocations).map((item, index) => {
    return {
      key: index++,
      label: (
        <div
          onClick={() => {
            setWorkLocation({ coordinates: item });
          }}
        >
          <div>Location {index++}</div>
          Latitude: {item.latitude} Longitude: {item.longitude}
        </div>
      ),
    };
  });

  const menu = <Menu items={newWorkLocationsArray} />;

  return (
    <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Work Locations
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default WorkLocationsDropdown;
