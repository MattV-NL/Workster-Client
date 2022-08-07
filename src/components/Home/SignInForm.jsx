import InputComp from '../Inputs/Input';
import { loginFormInputs, USERNAME_KEY, PASSWORD_KEY } from '../../constants';
import '../Inputs/inputs.scss';
import { useState, useCallback } from 'react';
import ButtonComp from '../Inputs/Button';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChange = useCallback(
    ({ setterFunction }) =>
      ({ target: { value } }) =>
        setterFunction(value),
    []
  );

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

  const handleClick = useCallback(async () => {
    const response = await fetch(
      `http://localhost:8000/api/login/${username},${password}`
    );
    const data = await response.json();
    console.log(data);
  }, [username, password]);

  return (
    <div className='work-form-layout'>
      <div className='work-form'>
        {[...loginFormInputs.values()].map(({ label, id, type, required }) => {
          return (
            <div className='label-input-container' key={id}>
              <label className='work-form-label'>{label}</label>
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
        })}
        <ButtonComp type='primary' onClick={handleClick}>
          Log In
        </ButtonComp>
      </div>
    </div>
  );
};

export default SignInForm;
