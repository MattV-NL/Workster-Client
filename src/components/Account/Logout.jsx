import { LogoutOutlined } from '@ant-design/icons';
import React from 'react';

const Logout = () => {
  return (
    <a
      className='page-navbar-item'
      onClick={() => {
        console.log('logout clicked');
      }}
    >
      <LogoutOutlined />
      {'   '}Logout
    </a>
  );
};

export default Logout;
