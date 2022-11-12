import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';

const AuthRedirect = () => {
  return (
    <Button className='dashboard-item' type='primary' block='true'>
      <Link to={paths.AUTH}>Sign Up / Login</Link>
    </Button>
  );
};

export default AuthRedirect;
