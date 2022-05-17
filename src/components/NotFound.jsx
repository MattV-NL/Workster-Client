import { Link } from 'react-router-dom';
import '../index.scss';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry...</h2>
      <p>This page can not be found</p>
      <Link to='/' className='home-link'>
        Back to the Home Page
      </Link>
    </div>
  );
};

export default NotFound;
