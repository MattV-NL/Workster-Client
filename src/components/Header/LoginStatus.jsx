import { useEffect, useState, useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

const LoginStatus = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const { loginStatus } = useContext(AuthenticationContext);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('http://localhost:8000/authCheck', {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      console.log(data);
      setAuthStatus(data);
    };
    checkAuth();
  }, [setAuthStatus, loginStatus]);

  return (
    <div className={authStatus.auth ? 'logged-in' : 'not-logged-in'}>
      {authStatus.auth ? authStatus.username : 'Account '}
      {authStatus.auth === false && 'Not'} Logged In
    </div>
  );
};

export default LoginStatus;
