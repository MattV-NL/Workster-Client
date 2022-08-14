import { createContext, useContext, useCallback, useState } from 'react';
import { WorkInputContext } from './WorkInputContext';
import { USERNAME_KEY, PASSWORD_KEY, EMAIL_KEY } from '../constants';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
  const { onChange } = useContext(WorkInputContext);
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);

  const handleClickReg = useCallback(async () => {
    const loginData = {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
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
    setUsernameReg('');
    setPasswordReg('');
    setEmailReg('');
  }, [
    usernameReg,
    emailReg,
    passwordReg,
    setUsernameReg,
    setPasswordReg,
    setEmailReg,
  ]);

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
    setUsername('');
    setPassword('');
    setLoginStatus(true);
  }, [username, password, setUsername, setPassword]);

  return (
    <AuthenticationContext.Provider
      value={{
        regData: {
          [USERNAME_KEY]: {
            value: usernameReg,
            onChange: onChange({ setterFunction: setUsernameReg }),
          },
          [EMAIL_KEY]: {
            value: emailReg,
            onChange: onChange({ setterFunction: setEmailReg }),
          },
          [PASSWORD_KEY]: {
            value: passwordReg,
            onChange: onChange({ setterFunction: setPasswordReg }),
          },
        },
        logInData: {
          [USERNAME_KEY]: {
            value: username,
            onChange: onChange({ setterFunction: setUsername }),
          },
          [PASSWORD_KEY]: {
            value: password,
            onChange: onChange({ setterFunction: setPassword }),
          },
        },
        handleClickReg,
        handleClickLogin,
        loginStatus,
        setLoginStatus,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
