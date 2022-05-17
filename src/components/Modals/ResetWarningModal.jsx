import { useCallback, useContext } from 'react';
import { WeatherInputContext } from '../../contexts/WeatherInputContext';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import Modal from './Modal';
import Button from '../Inputs/Button';
import './modals.scss';

const ResetWarningModal = () => {
  const { warningDisplay, setWarningDisplay } = useContext(WeatherInputContext);
  const { clearWeatherValues } = useContext(WeatherDataContext);
  const { clearWorkValues } = useContext(WorkDataContext);

  const handleClick = useCallback(
    ({ target: { id } }) => {
      if (id === 'yes-button') {
        clearWeatherValues();
        clearWorkValues();
        setWarningDisplay('none');
      } else {
        setWarningDisplay('none');
      }
    },
    [setWarningDisplay, clearWeatherValues, clearWorkValues]
  );

  return (
    <Modal display={warningDisplay} onClick={handleClick}>
      Are you sure you want to reset all the data you have already entered?
      <div className='button-container'>
        <Button onClick={handleClick} id='yes-button'>
          Yes
        </Button>
        <Button onClick={handleClick} id='no-button'>
          No
        </Button>
      </div>
    </Modal>
  );
};

export default ResetWarningModal;
