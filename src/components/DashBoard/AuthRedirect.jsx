import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import { useContext } from 'react';

const AuthRedirect = () => {
  const { darkMode } = useContext(UserSettingsContext);

  return (
    <Button
      className={darkMode ? 'dark-dashboard-item' : 'light-dashboard-item'}
      type='primary'
      block='true'
    >
      <Link to={paths.AUTH}>Sign Up / Login</Link>
    </Button>
  );
};

export default AuthRedirect;
