import { useCallback, useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Modal from './Modal';

const WeatherWarningModal = () => {
  const { inputWarningDisplay, setInputWarningDisplay } =
    useContext(WeatherDataContext);

  const closeWarning = useCallback(() => {
    setInputWarningDisplay('none');
  }, [setInputWarningDisplay]);
  return (
    <Modal display={inputWarningDisplay} onClick={closeWarning}>
      Please either select either your current location or enter your
      coordinates.
    </Modal>
  );
};

export default WeatherWarningModal;
