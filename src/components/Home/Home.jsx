import { useState } from 'react';
import { useCallback } from 'react';
import ButtonComp from '../Inputs/Button';
import './home.scss';
import LogInForm from './LogInForm';

const Home = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const checkAuth = useCallback(async () => {
    const response = await fetch('http://localhost:8000/authCheck', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });
    const data = await response.json();
    setAuthStatus(data.auth);
  }, [setAuthStatus]);
  return (
    <div className='home-container'>
      <div className='welcome-message'>
        Please Start by Registering or Signing In
      </div>
      <LogInForm />
      <ButtonComp type='primary' onClick={checkAuth}>
        Check Authentication Status
      </ButtonComp>
      <div className={authStatus ? 'auth-valid' : 'auth-failed'}>
        {authStatus ? 'User Authorized' : 'Authorization Failed'}
      </div>
    </div>
  );
};

export default Home;
