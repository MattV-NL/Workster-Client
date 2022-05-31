import './Header.scss';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import img1 from '../../images/logo.png';
import Compare from '../Compare/Compare';

const logo = 'logo';

const Header = () => {
  return (
    <div className='header'>
      <div className='title-container'>
        <div className='title'>Work / Weather Analyzer</div>
        <Link to={paths.HOME} className='logo-container'>
          <img className={logo} src={img1} alt='logo' />
        </Link>
      </div>
      <div className='navbar'>
        <Link to={paths.HOME} className='navbar-item'>
          Home
        </Link>
        <Link to={paths.WEATHER} className='navbar-item'>
          Weather Table
        </Link>
        <Link to={paths.WORK} className='navbar-item'>
          Work Form
        </Link>
        <Compare />
      </div>
    </div>
  );
};

export default Header;
