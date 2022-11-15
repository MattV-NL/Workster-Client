import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import { useContext } from 'react';

const AboutRedirect = () => {
  const { darkMode } = useContext(UserSettingsContext);

  return (
    <Button
      className={darkMode ? 'dark-dashboard-item' : 'light-dashboard-item'}
      type='primary'
      block='true'
    >
      <Link to={paths.ABOUT}>About</Link>
    </Button>
  );
};

export default AboutRedirect;
