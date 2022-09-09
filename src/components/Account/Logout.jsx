import { LogoutOutlined } from '@ant-design/icons';
import { useContext, useCallback } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

const Logout = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { setLogoutModalVisible } = useContext(AuthenticationContext);

  const logoutClicked = useCallback(() => {
    setLogoutModalVisible(true);
  }, [setLogoutModalVisible]);

  return (
    <a
      className={darkMode ? 'dark-navbar-item' : 'light-navbar-item'}
      onClick={logoutClicked}
    >
      <LogoutOutlined />
      {'   '}Logout
    </a>
  );
};

export default Logout;
