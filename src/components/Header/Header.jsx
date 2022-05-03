import './Header.scss';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';

const Header = () => {
  return (
    <div className='header'>
      <div className='title'>Work / Weather Analyzer</div>
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
      </div>
    </div>
  );
};

export default Header;
