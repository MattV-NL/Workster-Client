import { useContext, useState, useEffect } from 'react';
import { paths, SERVER_URL, locationsTableColumns } from '../../constants';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import './account.scss';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

const Account = () => {
  const { authStatus, setIsAccountModalVisible } = useContext(
    AuthenticationContext
  );
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
      if (await authStatus.auth) {
        const response = await fetch(SERVER_URL.getLocations, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(authStatus),
        });
        const data = await response.json();
        setLocations(data);
      } else {
        setIsAccountModalVisible(true);
        console.log({ message: 'please login to get your saved locations' });
      }
    };
    getLocations();
  }, [authStatus, setLocations, setIsAccountModalVisible]);

  const datasource = locations.map((location) => {
    const latitudeLink = (location.latitudeLink = (
      <Link to={`${paths.SAVED_WORK}${location.location_id}`}>
        {location.latitude}
      </Link>
    ));
    const longitudeLink = (location.longtiudeLink = (
      <Link to={`${paths.SAVED_WORK}${location.location_id}`}>
        {location.longitude}
      </Link>
    ));
    return {
      latitudeLink,
      longitudeLink,
    };
  });

  datasource.map((item, index) => (item.key = index++));

  return (
    <div className='page-layout'>
      <div className='page'>
        <h2 className='page-header'>{authStatus.username}</h2>
        <div className='page-label'>Saved Locations</div>
        <Table
          dataSource={datasource}
          columns={locationsTableColumns}
          className='locations-table'
        />
      </div>
    </div>
  );
};

export default Account;
