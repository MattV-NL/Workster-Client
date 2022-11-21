import ButtonComp from '../Inputs/Button';
import { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

const DeleteAccount = () => {
  const { setDeleteAccountModalVisible } = useContext(AuthenticationContext);
  return (
    <ButtonComp
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
