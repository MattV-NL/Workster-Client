import InputComp from '../Inputs/Input';
import { loginFormInputs, regFormInputs } from '../../constants';
import '../Inputs/inputs.scss';
import { useContext } from 'react';
import ButtonComp from '../Inputs/Button';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { FormOutlined, LoginOutlined } from '@ant-design/icons';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import RecoverAccount from './RecoverAccount';

const LogInForm = () => {
  const { handleClickReg, handleClickLogin, logInData, regData } = useContext(
    AuthenticationContext
  );
  const { darkMode } = useContext(UserSettingsContext);

  return (
    <>
      <div className={darkMode ? 'dark-form-layout' : 'light-form-layout'}>
        <div className='form'>
          <div className='form-header'>Register Here</div>
          {[...regFormInputs.values()].map(({ label, id, type, required }) => {
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
                  value={regData[id].value}
                  required={required}
                  onChange={regData[id].onChange}
                  placeholder={label}
                />
              </div>
            );
          })}
          <ButtonComp
            type='primary'
            className='button'
            onClick={handleClickReg}
            id={'reg-button'}
          >
            <FormOutlined />
            {'   '}Register
          </ButtonComp>
        </div>
      </div>
      <div className={darkMode ? 'dark-form-layout' : 'light-form-layout'}>
        <div className='form'>
          <div className='form-header'>Log In Here</div>
          {[...loginFormInputs.values()].map(
            ({ label, id, type, required }) => {
              return (
                <div className='label-input-container' key={id}>
                  <label
                    className={
                      darkMode ? 'dark-form-label' : 'light-form-label'
                    }
                  >
                    {label}
                  </label>
                  <InputComp
                    id={id}
                    type={type}
                    value={logInData[id].value}
                    required={required}
                    onChange={logInData[id].onChange}
                    placeholder={label}
                  />
                </div>
              );
            }
          )}
          <ButtonComp
            type='primary'
            className='button'
            onClick={handleClickLogin}
            id={'login-button'}
          >
            <LoginOutlined />
            {'   '}Log In
          </ButtonComp>
          <RecoverAccount />
        </div>
      </div>
    </>
  );
};

export default LogInForm;
