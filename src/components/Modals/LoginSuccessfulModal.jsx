import { useCallback, useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Modal } from 'antd';
import { useHistory } from 'react-router-dom';

const LoginSuccessfulModal = () => {
  const { loginSuccessful, setLoginSuccessful } = useContext(
    AuthenticationContext
  );

  const history = useHistory();

  const handleOkCancel = useCallback(() => {
    setLoginSuccessful(false);
    history.push('/');
  }, [setLoginSuccessful, history]);
  return (
    <Modal
      title='Login Successful'
      visible={loginSuccessful}
      onOk={handleOkCancel}
      onCancel={handleOkCancel}
      okText={'OK'}
      cancelText={'Cancel'}
    >
      Login Successful!
    </Modal>
  );
};

export default LoginSuccessfulModal;
