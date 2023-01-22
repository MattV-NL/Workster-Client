import { useContext, useEffect, useState } from 'react';
import { paths, locationsTableColumns } from '../../constants';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import '../DashBoard/dashboard.scss';
import './account.scss';
import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { PositionContext } from '../../contexts/PositionContext';
import DeleteLocationModal from '../Modals/DeleteLocationModal';
import { getLocations } from '../../restAPI/getAccountLocations';
import AccountSettingsLink from './AccountSettingsLink';
import Logout from './Logout';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import { Button } from 'antd';

const Account = () => {
  const { darkMode } = useContext(UserSettingsContext);
  const { authStatus, setIsAccountModalVisible } = useContext(
    AuthenticationContext
  );
  const {
    deleteLocationModalVisible,
    setDeleteLocationModalVisible,
    accountLocations,
    setAccountLocations,
  } = useContext(PositionContext);
  const [locationId, setLocationId] = useState(null);

  useEffect(() => {
    getLocations(authStatus, setAccountLocations, setIsAccountModalVisible);
  }, [
    authStatus,
    setAccountLocations,
    setIsAccountModalVisible,
    deleteLocationModalVisible,
  ]);

  const datasource = accountLocations.map((location) => {
    const latitudeLink = (location.latitudeLink = (
      <Link
        className='more-details'
        to={`${paths.SAVED_WORK}${location.location_id}`}
      >
        {location.latitude}
      </Link>
    ));
    const longitudeLink = (location.longtiudeLink = (
      <Link
        className='more-details'
        to={`${paths.SAVED_WORK}${location.location_id}`}
      >
        {location.longitude}
      </Link>
    ));
    const deleteRowIcon = (location.deleteIcon = (
      <>
        <DeleteOutlined
          onClick={() => {
            setLocationId(location.location_id);
            setDeleteLocationModalVisible(true);
          }}
        />
      </>
    ));
    return {
      latitudeLink,
      longitudeLink,
      deleteRowIcon,
    };
  });

  datasource.map((item, index) => (item.key = index));

  return (
    <div className='account-container'>
      {authStatus.auth ? (
        <>
          <div className={darkMode ? 'dark-page-layout' : 'light-page-layout'}>
            <div
              className={darkMode ? 'dark-page-header' : 'light-page-header'}
            >
              {authStatus.username}
            </div>
            <div className='page-navbar'>
              <AccountSettingsLink />
              <Logout />
            </div>
            <div className={darkMode ? 'dark-page-label' : 'light-page-label'}>
              Saved Locations
            </div>
            <div
              className={
                darkMode ? 'dark-locations-table' : 'light-locations-table'
              }
            >
              <Table dataSource={datasource} columns={locationsTableColumns} />
            </div>
          </div>
        </>
      ) : (
        <Button
          className={darkMode ? 'dark-dashboard-item' : 'light-dashboard-item'}
          type='primary'
        >
          <Link to={paths.DASHBOARD}>Back to DashBoard</Link>
        </Button>
      )}
      <DeleteLocationModal children={locationId} />
    </div>
  );
};

export default Account;
