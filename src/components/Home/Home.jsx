import './home.scss';
import LogInForm from './LogInForm';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='welcome-message'>
        Please Start by Registering or Signing In
      </div>
      <LogInForm />
    </div>
  );
};

export default Home;
