import { useContext, useState, useEffect } from 'react';
import { SERVER_URL } from '../../constants';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import './account.scss';
import { Table } from 'antd';
import { locationsTableColumns } from '../../constants';
let n = 1;

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
        setLocations(data);
      } else {
        setIsAccountModalVisible(true);
        console.log({ message: 'please login to get your saved locations' });
      }
    };
    getLocations();
  }, [authStatus, setLocations, setIsAccountModalVisible]);

  const datasource = locations;
  datasource.map((item) => (item.key = n++));

  return (
    <div className='page-layout'>
      <div className='page'>
        <h2 className='page-header'>{authStatus.username}</h2>
        <div className='page-laebl'>Saved Locations</div>
        <Table dataSource={datasource} columns={locationsTableColumns} />
      </div>
    </div>
  );
};

export default Account;
