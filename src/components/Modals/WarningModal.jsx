import { useCallback, useContext } from 'react';
import { WeatherInputContext } from '../../contexts/WeatherInputContext';
import Modal from './Modal';

const WarningModal = () => {
  const { inputWarningDisplay, setInputWarningDisplay } =
    useContext(WeatherInputContext);

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
