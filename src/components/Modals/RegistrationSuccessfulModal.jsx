import { useCallback, useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Modal } from 'antd';

const RegistrationSuccessfulModal = () => {
  const { regSuccessful, setRegSuccessful } = useContext(AuthenticationContext);

  const handleOkCancel = useCallback(() => {
    setRegSuccessful(false);
  }, [setRegSuccessful]);
  return (
    <Modal
      title='Registration Successful'
      visible={regSuccessful}
      onOk={handleOkCancel}
      onCancel={handleOkCancel}
    >
      Registration Successful!
    </Modal>
  );
};

export default RegistrationSuccessfulModal;
