import '../Inputs/inputs.scss';
import WorkButton from './WorkButton';
import InputComp from '../Inputs/Input';
import { workFormInputs } from '../../constants';
import { WorkInputContext } from '../../contexts/WorkInputContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { useContext } from 'react';
import WorkLocationsDropdown from './WorkLocationsDropdown';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const WorkForm = () => {
  const { workData } = useContext(WorkInputContext);
  const { authStatus } = useContext(AuthenticationContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark-form-layout' : 'light-form-layout'}>
      <form className='form'>
        {[...workFormInputs.values()].map(({ label, id, type, required }) => {
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
                value={workData[id].value}
                required={required}
                onChange={workData[id].onChange}
              />
            </div>
          );
        })}
        {authStatus.auth ? <WorkLocationsDropdown /> : ''}
      </form>
      <WorkButton />
    </div>
  );
};

export default WorkForm;
