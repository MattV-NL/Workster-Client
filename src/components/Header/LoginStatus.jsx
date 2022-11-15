import { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';

const LoginStatus = () => {
  const { authStatus } = useContext(AuthenticationContext);

  return (
    <div>
      {authStatus.auth ? (
        <Link to={paths.ACCOUNT}>{authStatus.username}</Link>
      ) : (
        <Link className='not-logged-in' to={paths.AUTH}>
          Account
        </Link>
      )}
    </div>
  );
};

export default LoginStatus;
