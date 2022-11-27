import { useContext, useCallback } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { SERVER_EP } from '../../constants';
import { Modal } from 'antd';
import { deleteAccount } from '../../restAPI/deleteAccount';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import { paths } from '../../constants';
import { useHistory } from 'react-router-dom';

const DeleteAccountModal = () => {
  const {
    authStatus,
    setAuthStatus,
    deleteAccountModalVisible,
    setDeleteAccountModalVisible,
  } = useContext(AuthenticationContext);
  const {
    setDarkMode,
    setRainConflict,
    setSnowConflict,
    setWindConflict,
    setUnits,
  } = useContext(UserSettingsContext);

  const handleCancel = useCallback(() => {
    setDeleteAccountModalVisible(false);
  }, [setDeleteAccountModalVisible]);

  const history = useHistory();

  const handleOk = useCallback(async () => {
    const packagedInfo = {
      user_id: authStatus.user_id,
    };
    await deleteAccount(SERVER_EP.softDeleteAccount, packagedInfo);
    localStorage.removeItem('token');
    setAuthStatus({
      auth: false,
      message: 'logged out',
    });
    setDarkMode(true);
    setRainConflict(20);
    setSnowConflict(20);
    setWindConflict(30);
    setUnits('metric');
    setDeleteAccountModalVisible(false);
    history.push(paths.DASHBOARD);
  }, [
    setDeleteAccountModalVisible,
    setAuthStatus,
    setDarkMode,
    setRainConflict,
    setSnowConflict,
    setWindConflict,
    setUnits,
    history,
    authStatus.user_id,
  ]);

  return (
    <Modal
      title='Wait!'
      visible={deleteAccountModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      Are you sure you want to delete your account? The database is purged of
      deleted accounts on the 15th of every month. If you wish to recover your
      account please do so before this time. Otherwise, the account is not
      recoverable.
    </Modal>
  );
};

export default DeleteAccountModal;
