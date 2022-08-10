import InputComp from '../Inputs/Input';
import { loginFormInputs, regFormInputs } from '../../constants';
import '../Inputs/inputs.scss';
import { useContext } from 'react';
import ButtonComp from '../Inputs/Button';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

const LogInForm = () => {
  const { handleClickReg, handleClickLogin, logInData, regData } = useContext(
    AuthenticationContext
  );

  return (
    <div className='work-form-layout'>
      <div className='work-form'>
        <h3>Register Here</h3>
        {[...regFormInputs.values()].map(({ label, id, type, required }) => {
          return (
            <div className='label-input-container' key={id}>
              <label className='work-form-label'>{label}</label>
              <InputComp
                id={id + label}
                type={type}
                value={regData[id].value}
                required={required}
                onChange={regData[id].onChange}
                placeholder={label}
              />
            </div>
          );
        })}
        <ButtonComp type='primary' onClick={handleClickReg}>
          Register
        </ButtonComp>
        <h3>Log In Here</h3>
        {[...loginFormInputs.values()].map(({ label, id, type, required }) => {
          return (
            <div className='label-input-container' key={id}>
              <label className='work-form-label'>{label}</label>
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
        <ButtonComp type='primary' onClick={handleClickLogin}>
          Log In
        </ButtonComp>
      </div>
    </div>
  );
};

export default LogInForm;
