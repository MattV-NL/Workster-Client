import { useCallback, useContext } from 'react';
import { WorkInputContext } from '../../contexts/WorkInputContext';
import Modal from './Modal';

const WarningModal = () => {
  const { inputWarningDisplay, setInputWarningDisplay } =
    useContext(WorkInputContext);

  const closeWarning = useCallback(() => {
    setInputWarningDisplay('none');
  }, [setInputWarningDisplay]);
  return (
    <Modal display={inputWarningDisplay} onClick={closeWarning}>
      Please enter all information
    </Modal>
  );
};

export default WarningModal;
