import './home.scss';
import { Link } from 'react-router-dom';
import { paths } from '../../constants.js';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='welcome-message-title'>Welcome to my App!</div>
      <div className='welcome-message'>
        I created this app with my occupation in the construciton industry in
        mind. So a user can enter in some basic work information that is very
        dependent on weather, and also enter basic weather information that
        affects their jobs. This will allow the user to see wether or not it
        maybe a good idea to revise their work schedule for their particular
        workscope.
      </div>
      <div className='welcome-message'>
        Please Start by selecting one of following options
      </div>
      <Link to={paths.WEATHER} className='link'>
        <div className='home-item'>Weather</div>
      </Link>
      <Link to={paths.WORK} className='link'>
        <div className='home-item'>Work</div>
      </Link>
    </div>
  );
};

export default Home;
