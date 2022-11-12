import { useCallback, useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Modal } from 'antd';

const LoginSuccessfulModal = () => {
  const { loginSuccessful, setLoginSuccessful } = useContext(
    AuthenticationContext
  );

  const handleOkCancel = useCallback(() => {
    setLoginSuccessful(false);
  }, [setLoginSuccessful]);
  return (
    <Modal
      title='Login Successful'
      visible={loginSuccessful}
      onOk={handleOkCancel}
      onCancel={handleOkCancel}
    >
      Login Successful!
    </Modal>
  );
};

export default LoginSuccessfulModal;
