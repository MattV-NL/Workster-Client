import { useContext } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { Modal } from 'antd';

const WorkDetailsModalProfile = ({ children, title }) => {
  const { isWorkDetailsVisibleProfile, setIsWorkDetailsVisibleProfile } =
    useContext(WorkDataContext);
  const handleOkCancel = () => {
    setIsWorkDetailsVisibleProfile(false);
  };
  return (
    <Modal
      title={title}
      visible={isWorkDetailsVisibleProfile}
      onOk={handleOkCancel}
      onCancel={handleOkCancel}
    >
      {children}
    </Modal>
  );
};

export default WorkDetailsModalProfile;
