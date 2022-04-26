import './modals.scss';
import { useCallback, useContext } from 'react';
import { WeatherInputContext } from '../../contexts/WeatherInputContext';

const WarningModal = () => {
  const { warningDisplay, setWarningDisplay } = useContext(WeatherInputContext);

  const closeWarning = useCallback(() => {
    setWarningDisplay('none');
  }, [setWarningDisplay]);
  return (
    <div
      className='warning-message-container'
      style={{ display: `${warningDisplay}` }}
    >
      <div className='warning-message'>
        <div className='close-button' onClick={closeWarning}>
          &times;
        </div>
        <div className='warning-text'>Please enter all Information</div>
      </div>
    </div>
  );
};

export default WarningModal;
