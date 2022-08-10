import './home.scss';
import LogInForm from './LogInForm';

const Home = () => {
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
        Please Start by Registering or Signing In
      </div>
      <LogInForm />
    </div>
  );
};

export default Home;
