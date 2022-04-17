import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='title'>Work / Weather Analyzer</div>
      <div className='navbar'>
        <Link to='/' className='navbar-item'>
          Weather Table
        </Link>
        <Link to='/work' className='navbar-item'>
          Work Form
        </Link>
      </div>
    </div>
  );
};

export default Header;
