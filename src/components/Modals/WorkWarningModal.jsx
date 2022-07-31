import { useCallback, useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Modal from './Modal';

const WorkWarningModal = () => {
  const { inputWarningDisplay, setInputWarningDisplay } =
    useContext(WeatherDataContext);

  const closeWarning = useCallback(() => {
    setInputWarningDisplay('none');
  }, [setInputWarningDisplay]);
  return (
    <Modal display={inputWarningDisplay} onClick={closeWarning}>
      Please enter at least a date and some details about the work to be done.
    </Modal>
  );
};

export default WorkWarningModal;
