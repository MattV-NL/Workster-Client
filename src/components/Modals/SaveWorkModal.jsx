import { useContext, useCallback } from 'react';
import { Modal } from 'antd';
import { WorkDataContext } from '../../contexts/WorkDataContext';

const SaveWorkModal = () => {
  const { setSaveWorkModalVisible, saveWorkModalVisible } =
    useContext(WorkDataContext);
  const handleOkCancel = useCallback(() => {
    setSaveWorkModalVisible(false);
  }, [setSaveWorkModalVisible]);
  return (
    <div>
      <Modal
        title='Please Login'
        visible={saveWorkModalVisible}
        onOk={handleOkCancel}
        onCancel={handleOkCancel}
      >
        Please login to save work information.
      </Modal>
    </div>
  );
};

export default SaveWorkModal;
