import { useEffect, useState, useContext } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import { SERVER_URL } from '../../constants';

const LoginStatus = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const { loginStatus } = useContext(AuthenticationContext);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch(SERVER_URL.authCheck, {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      console.log(data);
      setAuthStatus(data);
    };
    checkAuth();
  }, [setAuthStatus, loginStatus]);

  const menuItems = [
    {
      label: authStatus.auth ? (
        <div className='logged-in'>Logged In</div>
      ) : (
        <Link to={paths.HOME} className='navbar-item'>
          Sign In / Sign Up
        </Link>
      ),
      key: '1',
    },
    {
      label: 'Settings',
      key: '2',
    },
  ];

  const menu = <Menu items={menuItems} />;

  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {authStatus.auth ? authStatus.username : 'Account'}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default LoginStatus;
