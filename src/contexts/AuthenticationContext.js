import { createContext, useCallback, useState, useEffect } from 'react';
import { USERNAME_KEY, PASSWORD_KEY, EMAIL_KEY } from '../constants';
import { checkToken, attemptLogin, attemptReg } from '../restAPI/auth';
import { onChange } from '../restAPI/onChange';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
  const [usernameReg, setUsernameReg] = useState(null);
  const [passwordReg, setPasswordReg] = useState(null);
  const [emailReg, setEmailReg] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authStatus, setAuthStatus] = useState(false);
  const [isRegModalVisible, setIsRegModalVisible] = useState(false);
  const [isAccountModalVisible, setIsAccountModalVisible] = useState(false);

  const handleClickReg = useCallback(async () => {
    if (attemptReg(usernameReg, passwordReg, emailReg)) {
      setUsernameReg('');
      setPasswordReg('');
      setEmailReg('');
      console.log({
        message: 'registration successful',
      });
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
    if (attemptLogin(username, password)) {
      setAuthStatus(await checkToken(localStorage.getItem('token')));
      setUsername('');
      setPassword('');
    } else {
      setIsRegModalVisible(true);
      console.log({
        message: 'please enter your username and password to login.',
      });
    }
  }, [username, password, setUsername, setPassword, setAuthStatus]);

  useEffect(() => {
    const checkAuth = async () => {
      setAuthStatus(await checkToken(localStorage.getItem('token')));
    };
    checkAuth();
  }, [authStatus]);

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
        authStatus,
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
