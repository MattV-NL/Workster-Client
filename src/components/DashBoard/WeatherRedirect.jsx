import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import { useContext } from 'react';

const WeatherRedirect = () => {
  const { darkMode } = useContext(UserSettingsContext);

  return (
    <Button
      className={darkMode ? 'dark-dashboard-item' : 'light-dashboard-item'}
      type='primary'
      block='true'
      id='weather-button'
    >
      <Link to={paths.WEATHER}>Weather</Link>
    </Button>
  );
};

export default WeatherRedirect;
