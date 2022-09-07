import InputComp from '../Inputs/Input';
import { positionFormInputs } from '../../constants';
import '../Inputs/inputs.scss';
import { useContext } from 'react';
import { PositionContext } from '../../contexts/PositionContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import LocationDropdown from './LocationDropdown';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const PositionInput = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { positionData } = useContext(PositionContext);
  const { authStatus } = useContext(AuthenticationContext);
  return (
    <div className={darkMode ? 'dark-form-layout' : 'light-form-layout'}>
      <form className='form'>
        {authStatus.auth ? <LocationDropdown /> : ''}
        {[...positionFormInputs.values()].map(
          ({ label, id, type, required }) => {
            return (
              <div className='label-input-container' key={id}>
                <label
                  className={darkMode ? 'dark-form-label' : 'light-form-label'}
                >
                  {label}
                </label>
                <InputComp
                  id={id}
                  type={type}
                  value={positionData[id].value}
                  required={required}
                  onChange={positionData[id].onChange}
                />
              </div>
            );
          }
        )}
      </form>
    </div>
  );
};

export default PositionInput;
