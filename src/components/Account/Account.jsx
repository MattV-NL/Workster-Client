import { useContext, useEffect } from 'react';
import { paths, locationsTableColumns } from '../../constants';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import './account.scss';
import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { PositionContext } from '../../contexts/PositionContext';
import DeleteLocationModal from '../Modals/DeleteLocationModal';
import { getLocations } from '../../restAPI/getAccountLocations';

const Account = () => {
  const { authStatus, setIsAccountModalVisible } = useContext(
    AuthenticationContext
  );
  const {
    deleteLocationModalVisible,
    setDeleteLocationModalVisible,
    accountLocations,
    setAccountLocations,
  } = useContext(PositionContext);

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
      <Link to={`${paths.SAVED_WORK}${location.location_id}`}>
        {location.latitude}
      </Link>
    ));
    const longitudeLink = (location.longtiudeLink = (
      <Link to={`${paths.SAVED_WORK}${location.location_id}`}>
        {location.longitude}
      </Link>
    ));
    const deleteRowIcon = (location.deleteIcon = (
      <>
        <DeleteOutlined
          onClick={() => {
            setDeleteLocationModalVisible(true);
          }}
        />
        <DeleteLocationModal children={location.location_id} />
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
