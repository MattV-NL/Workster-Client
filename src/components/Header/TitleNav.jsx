import './titleNav.scss';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import img1 from '../../images/logo.png';
import Compare from '../Compare/Compare';
import LoginStatus from './LoginStatus';
import { useContext } from 'react';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';

const logo = 'logo';

const TitleNav = () => {
  const { darkMode } = useContext(UserSettingsContext);

  return (
    <div className='header'>
      <div className='title-container'>
        <div className='title'>Workster</div>
        <Link to={paths.DASHBOARD}>
          <img className={logo} src={img1} alt='logo' />
        </Link>
      </div>
      <div className='navbar'>
        <Link to={paths.DASHBOARD} className='navbar-item'>
          Home
        </Link>
        <Link to={paths.WEATHER} className='navbar-item'>
          Weather
        </Link>
        <Link to={paths.WORK} className='navbar-item'>
          Work
        </Link>
        <Compare className='navbar-item' />
        <LoginStatus
          className={darkMode ? 'dark-navbar-item' : 'light-navbar-item'}
        />
        <Link to={paths.ABOUT} className='navbar-item'>
          About
        </Link>
      </div>
    </div>
  );
};

export default TitleNav;
