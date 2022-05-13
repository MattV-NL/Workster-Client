import { useCallback, useContext } from 'react';
import { WeatherInputContext } from '../../contexts/WeatherInputContext';
import Modal from '../Modals/Modal';

const WarningModal = () => {
  const { warningDisplay, setWarningDisplay } = useContext(WeatherInputContext);

  const closeWarning = useCallback(() => {
    setWarningDisplay('none');
  }, [setWarningDisplay]);
  return (
    <Modal display={warningDisplay} onClick={closeWarning}>
      Please enter all information
    </Modal>
  );
};

export default WarningModal;
