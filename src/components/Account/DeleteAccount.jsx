import ButtonComp from '../Inputs/Button';
import { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import './account.scss';

const DeleteAccount = () => {
  const { setDeleteAccountModalVisible } = useContext(AuthenticationContext);
  return (
    <ButtonComp
      className='delete-button'
      type={'primary'}
      onClick={() => {
        setDeleteAccountModalVisible(true);
      }}
    >
      Delete Account
    </ButtonComp>
  );
};

export default DeleteAccount;
