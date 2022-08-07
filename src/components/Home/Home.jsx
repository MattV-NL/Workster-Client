import './home.scss';
import { Link } from 'react-router-dom';
import { paths } from '../../constants.js';
import Button2 from '../Inputs/Button';

const Home = () => {
  const homeItem = 'home-item';

  return (
    <div className='home-container'>
      <div className='welcome-message-title'>Welcome to my App!</div>
      <div className='welcome-message'>
        I created this app with my occupation in the construction industry in
        mind. So a user can enter in some basic work information that is very
        dependent on weather, and be able to visualize it in the tables and
        charts. This will allow the user to see whether or not it The App also
        takes weather infromation from an API based on the users location and
        there is a effect in the navigation bar that will display if there is a
        scheduling confilct where there may be work on a day with harsher
        weather.
      </div>
      <div className='welcome-message'>
        Please Start by selecting one of following options
      </div>

      <Button2 type='primary' className={homeItem}>
        <Link to={paths.WEATHER} className='homeLink'>
          Weather
        </Link>
      </Button2>

      <Button2 type='primary' className={homeItem}>
        <Link to={paths.WORK} className='homeLink'>
          Work
        </Link>
      </Button2>
    </div>
  );
};

export default Home;
