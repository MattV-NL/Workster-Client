import { useContext, useCallback } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Modal } from 'antd';

const RecoverAccountModal = () => {
  const { recoverAccountModal, setRecoverAccountModal } = useContext(
    AuthenticationContext
  );

  const handleOkCancel = useCallback(() => {
    setRecoverAccountModal(false);
  }, [setRecoverAccountModal]);
  return (
    <Modal
      title='Account Recovery Successful'
      visible={recoverAccountModal}
      onOk={handleOkCancel}
      onCancel={handleOkCancel}
    >
      Account Recovery Successful!
    </Modal>
  );
};

export default RecoverAccountModal;
