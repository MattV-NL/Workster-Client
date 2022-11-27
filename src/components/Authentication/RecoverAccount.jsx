import './authentication.scss';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';

const RecoverAccount = () => {
  return (
    <Link className='recover-account-text' to={paths.RECOVER}>
      Recover a Deleted Account
    </Link>
  );
};

export default RecoverAccount;
