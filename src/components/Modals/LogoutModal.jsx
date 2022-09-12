import { useCallback, useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Modal } from 'antd';

const LogoutModal = () => {
  const { setAuthStatus, logoutModalVisible, setLogoutModalVisible } =
    useContext(AuthenticationContext);

  const handleOk = useCallback(() => {
    localStorage.removeItem('token');
    setAuthStatus({
      auth: false,
      message: 'logged out',
    });
    setLogoutModalVisible(false);
  }, [setAuthStatus, setLogoutModalVisible]);

  const handleCancel = useCallback(() => {
    setLogoutModalVisible(false);
  }, [setLogoutModalVisible]);

  return (
    <Modal
      title='Wait!'
      visible={logoutModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      Are you sure you want to logout?
    </Modal>
  );
};

export default LogoutModal;
