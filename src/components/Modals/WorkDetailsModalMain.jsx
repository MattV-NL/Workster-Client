import { useContext } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { Modal } from 'antd';

const WorkDetailsModalMain = ({ children, title }) => {
  const { isWorkDetailsVisibleMain, setIsWorkDetailsVisibleMain } =
    useContext(WorkDataContext);
  const handleOkCancel = () => {
    setIsWorkDetailsVisibleMain(false);
  };
  return (
    <Modal
      title={title}
      visible={isWorkDetailsVisibleMain}
      onOk={handleOkCancel}
      onCancel={handleOkCancel}
    >
      {children}
    </Modal>
  );
};

export default WorkDetailsModalMain;
