import { useCallback, useContext } from 'react';
import { Modal } from 'antd';
import { WorkInputContext } from '../../contexts/WorkInputContext';

const WorkWarningModal = () => {
  const { isWorkModalVisible, setIsWorkModalVisible } =
    useContext(WorkInputContext);
  const handleOkCancel = useCallback(() => {
    setIsWorkModalVisible(false);
  }, [setIsWorkModalVisible]);

  return (
    <div>
      <Modal
        title='Wait!'
        visible={isWorkModalVisible}
        onOk={handleOkCancel}
        onCancel={handleOkCancel}
      >
        Please enter at least a date and some details about the work to be done.
      </Modal>
    </div>
  );
};

export default WorkWarningModal;
