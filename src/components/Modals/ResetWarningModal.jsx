import { useCallback, useContext } from 'react';
import { WeatherInputContext } from '../../contexts/WeatherInputContext';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import Modal from './Modal';
import Button from '../Inputs/Button';

const ResetWarningModal = () => {
  const { warningDisplay, setWarningDisplay } = useContext(WeatherInputContext);
  const { clearWeatherValues } = useContext(WeatherDataContext);
  const { clearWorkValues } = useContext(WorkDataContext);

  const handleClick = useCallback(({ target: { id } }) => {
    if (id === 'yes-button') {
      clearWeatherValues();
      clearWorkValues();
      setWarningDisplay('none');
    } else {
      setWarningDisplay('none');
    }
  });

  return (
    <Modal display={warningDisplay} onClick={handleClick}>
      Are you sure you want to reset all the data you have already entered?
      <Button onClick={handleClick} id='yes-button'>
        Yes
      </Button>
      <Button onClick={handleClick} id='no-button'>
        No
      </Button>
    </Modal>
  );
};

export default ResetWarningModal;
