import { createContext, useContext, useCallback, useState } from 'react';
import { WorkInputContext } from './WorkInputContext';
import {
  USERNAME_KEY,
  PASSWORD_KEY,
  EMAIL_KEY,
  SERVER_URL,
} from '../constants';
import { checkToken } from '../restAPI/auth';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
  const { onChange } = useContext(WorkInputContext);
  const [usernameReg, setUsernameReg] = useState(null);
  const [passwordReg, setPasswordReg] = useState(null);
  const [emailReg, setEmailReg] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);
  const [authStatus, setAuthStatus] = useState(false);
  const [isRegModalVisible, setIsRegModalVisible] = useState(false);
  const [isAccountModalVisible, setIsAccountModalVisible] = useState(false);

  const handleClickReg = useCallback(async () => {
    if (usernameReg && passwordReg && emailReg) {
      const loginData = {
        username: usernameReg,
        password: passwordReg,
        email: emailReg,
      };
      const response = await fetch(SERVER_URL.register, {
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
    } else {
      setIsRegModalVisible(true);
      console.log({
        message: 'please enter a username, email, and password to register.',
      });
    }
  }, [
    usernameReg,
    emailReg,
    passwordReg,
    setUsernameReg,
    setPasswordReg,
    setEmailReg,
  ]);

  const handleClickLogin = useCallback(async () => {
    if (username && password) {
      const loginData = {
        username: username,
        password: password,
      };
      const response = await fetch(SERVER_URL.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      localStorage.setItem('token', data.token);
      if (data.auth) {
        setLoginStatus(true);
      }
      setUsername('');
      setPassword('');
    } else {
      setIsRegModalVisible(true);
      console.log({
        message: 'please enter your username and password to login.',
      });
    }
  }, [username, password, setUsername, setPassword]);

  const checkAuth = useCallback(async () => {
    setAuthStatus(await checkToken(localStorage.getItem('token')));
  }, [setAuthStatus, loginStatus]);

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
        authStatus,
        setAuthStatus,
        checkAuth,
        isRegModalVisible,
        setIsRegModalVisible,
        isAccountModalVisible,
        setIsAccountModalVisible,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
