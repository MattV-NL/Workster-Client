import { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

const LoginStatus = () => {
  const { loginStatus } = useContext(AuthenticationContext);

  return (
    <div className={loginStatus ? 'logged-in' : 'not-logged-in'}>
      {loginStatus === false && 'Not'} Logged In
    </div>
  );
};

export default LoginStatus;
