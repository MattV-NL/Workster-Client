import './titleNav.scss';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import img1 from '../../images/logo.png';
import Compare from '../Compare/Compare';
import LoginStatus from './LoginStatus';
import { Menu } from 'antd';

const logo = 'logo';

const items = [
  {
    label: (
      <Link to={paths.HOME} className='navbar-item'>
        Home
      </Link>
    ),
    key: 'home',
  },
  {
    label: (
      <Link to={paths.WEATHER} className='navbar-item'>
        Weather Page
      </Link>
    ),
    key: 'weather',
  },
  {
    label: (
      <Link to={paths.WORK} className='navbar-item'>
        Work Page
      </Link>
    ),
    key: 'work',
  },
  {
    label: <Compare />,
    key: 'compare',
  },
  {
    label: <LoginStatus />,
    key: 'login',
  },
];

const TitleNav = () => {
  return (
    <div className='header'>
      <div className='title-container'>
        <div className='title'>Work / Weather Analyzer</div>
        <Link to={paths.HOME} className='logo-container'>
          <img className={logo} src={img1} alt='logo' />
        </Link>
      </div>
      <Menu mode='horizontal' items={items} className='top-navbar-menu' />
    </div>
  );
};

export default TitleNav;
