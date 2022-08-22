import { useEffect, useContext } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';

const LoginStatus = () => {
  const { authStatus, checkAuth } = useContext(AuthenticationContext);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

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
      label: (
        <Link to={paths.ACCOUNT} className='navbar-item'>
          Account
        </Link>
      ),
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
