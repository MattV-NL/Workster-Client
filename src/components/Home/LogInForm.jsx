import InputComp from '../Inputs/Input';
import { loginFormInputs, USERNAME_KEY, PASSWORD_KEY } from '../../constants';
import '../Inputs/inputs.scss';
import { useState, useCallback } from 'react';
import ButtonComp from '../Inputs/Button';

const LogInForm = () => {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClickReg = useCallback(async () => {
    const loginData = {
      username: usernameReg,
      password: passwordReg,
    };
    const response = await fetch(`http://localhost:8000/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const data = await response.json();
    console.log(data);
  }, [usernameReg, passwordReg]);

  const handleClickLogin = useCallback(async () => {
    const loginData = {
      username: username,
      password: password,
    };
    const response = await fetch(`http://localhost:8000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const data = await response.json();
    console.log(data);
  }, [username, password]);

  const onChange = useCallback(
    ({ setterFunction }) =>
      ({ target: { value } }) =>
        setterFunction(value),
    []
  );

  const regData = {
    [USERNAME_KEY]: {
      value: usernameReg,
      onChange: onChange({ setterFunction: setUsernameReg }),
    },
    [PASSWORD_KEY]: {
      value: passwordReg,
      onChange: onChange({ setterFunction: setPasswordReg }),
    },
  };

  const logInData = {
    [USERNAME_KEY]: {
      value: username,
      onChange: onChange({ setterFunction: setUsername }),
    },
    [PASSWORD_KEY]: {
      value: password,
      onChange: onChange({ setterFunction: setPassword }),
    },
  };

  return (
    <div className='work-form-layout'>
      <div className='work-form'>
        <h3>Register Here</h3>
        {[...loginFormInputs.values()].map(({ label, id, type, required }) => {
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
