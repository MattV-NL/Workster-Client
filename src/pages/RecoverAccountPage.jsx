import { useContext } from 'react';
import { UserSettingsContext } from '../contexts/UserSettingsContext';
import { loginFormInputs } from '../constants';
import InputComp from '../components/Inputs/Input';
import ButtonComp from '../components/Inputs/Button';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { LoginOutlined } from '@ant-design/icons';
import RecoverAccountModal from '../components/Modals/RecoverAccountModal';

const RecoverAccountPage = () => {
  const { darkMode } = useContext(UserSettingsContext);
  const { handleClickRecover, logInData } = useContext(AuthenticationContext);
  return (
    <div className={darkMode ? 'dark-page-layout' : 'light-page-layout'}>
      <div className='recover-header'>
        To recover a deleted account please enter the username and password.
      </div>
      <div className='form'>
        <div className='form-header'>Enter Credentials Here</div>
        {[...loginFormInputs.values()].map(({ label, id, type, required }) => {
          return (
            <div className='label-input-container' key={id}>
              <label
                className={darkMode ? 'dark-form-label' : 'light-form-label'}
              >
                {label}
              </label>
              <InputComp
                id={id + type}
                type={type}
                value={logInData[id].value}
                required={required}
                onChange={logInData[id].onChange}
                placeholder={label}
              />
            </div>
          );
        })}
        <ButtonComp
          type='primary'
          className='button'
          onClick={handleClickRecover}
        >
          <LoginOutlined />
          {'   '}Submit
        </ButtonComp>
      </div>
      <RecoverAccountModal />
    </div>
  );
};

export default RecoverAccountPage;
