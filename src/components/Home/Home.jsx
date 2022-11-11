import './home.scss';
import LogInForm from './LogInForm';
import { useEffect, useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { checkToken } from '../../restAPI/auth';

const Home = () => {
  const { setAuthStatus } = useContext(AuthenticationContext);

  useEffect(() => {
    const checkAuth = async () => {
      setAuthStatus(await checkToken(localStorage.getItem('token')));
    };
    checkAuth();
  }, [setAuthStatus]);

  return (
    <>
      <div className='home-container'>
        <div className='welcome-message'>
          Please Start by Registering or Signing In
        </div>
        <LogInForm />
      </div>
    </>
  );
};

export default Home;
