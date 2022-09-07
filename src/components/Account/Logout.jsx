import { LogoutOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const Logout = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <a
      className={darkMode ? 'dark-navbar-item' : 'light-navbar-item'}
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
