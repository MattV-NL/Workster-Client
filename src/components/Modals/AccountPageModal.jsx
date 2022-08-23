import { useCallback, useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Modal } from 'antd';

const AccountPageModal = () => {
  const { isAccountModalVisible, setIsAccountModalVisible } = useContext(
    AuthenticationContext
  );

  const handleOkCancel = useCallback(() => {
    setIsAccountModalVisible(false);
  }, [setIsAccountModalVisible]);

  return (
    <Modal
      title='Wait!'
      visible={isAccountModalVisible}
      onOk={handleOkCancel}
      onCancel={handleOkCancel}
    >
      Please Login to use this feature.
    </Modal>
  );
};

export default AccountPageModal;
