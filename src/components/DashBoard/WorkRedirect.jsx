import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import { useContext } from 'react';

const WorkRedirect = () => {
  const { darkMode } = useContext(UserSettingsContext);

  return (
    <Button
      className={darkMode ? 'dark-dashboard-item' : 'light-dashboard-item'}
      type='primary'
      block='true'
      id='work-button'
    >
      <Link to={paths.WORK}>Work</Link>
    </Button>
  );
};

export default WorkRedirect;
