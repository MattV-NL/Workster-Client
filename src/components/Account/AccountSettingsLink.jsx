import { SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { useContext } from 'react';

const AccountSettingsLink = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Link
      to={paths.SETTINGS}
      className={darkMode ? 'dark-navbar-item' : 'light-navbar-item'}
    >
      <SettingOutlined />
      {'  '}
      Settings
    </Link>
  );
};

export default AccountSettingsLink;
