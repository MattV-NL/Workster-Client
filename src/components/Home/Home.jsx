import './home.scss';
import LogInForm from './LogInForm';
import { useEffect, useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { UnitsContext } from '../../contexts/UnitsContext';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { checkToken } from '../../restAPI/auth';
import { getSettings } from '../../restAPI/getSettings';

const Home = () => {
  const { authStatus, setAuthStatus } = useContext(AuthenticationContext);
  const { setDarkMode } = useContext(DarkModeContext);
  const { setUnits } = useContext(UnitsContext);

  useEffect(() => {
    const checkAuth = async () => {
      setAuthStatus(await checkToken(localStorage.getItem('token')));
    };
    checkAuth();
  }, [setAuthStatus]);

  useEffect(() => {
    const checkSettings = async () => {
      getSettings(authStatus, setDarkMode, setUnits);
    };
    checkSettings();
  }, [authStatus, setDarkMode, setUnits]);

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
