import { Link } from 'react-router-dom';
import { paths } from '../../constants';
import './notFound.scss';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found-header'>Sorry</div>
      <div className='not-found-body'>This page can not be found</div>
      <Link to={paths.DASHBOARD} className='not-found-home-link'>
        Back to the Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
