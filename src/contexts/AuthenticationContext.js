import { createContext, useCallback, useState, useEffect } from 'react';
import {
  USERNAME_KEY,
  PASSWORD_KEY,
  USERNAME_KEY_REG,
  PASSWORD_KEY_REG,
  EMAIL_KEY,
} from '../constants';
import {
  checkToken,
  attemptLogin,
  attemptReg,
  recoverAccount,
} from '../restAPI/auth';
import { onChange } from '../restAPI/onChange';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
  const [usernameReg, setUsernameReg] = useState(null);
  const [passwordReg, setPasswordReg] = useState(null);
  const [emailReg, setEmailReg] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authStatus, setAuthStatus] = useState(
    checkToken(localStorage.getItem('token'))
  );
  const [isRegModalVisible, setIsRegModalVisible] = useState(false);
  const [isAccountModalVisible, setIsAccountModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [regMessage, setRegMessage] = useState(false);
  const [loginMessageModal, setLoginMessageModal] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [regSuccessful, setRegSuccessful] = useState(false);
  const [deleteAccountModalVisible, setDeleteAccountModalVisible] =
    useState(false);
  const [recoverAccountModal, setRecoverAccountModal] = useState(false);

  const handleClickReg = useCallback(async () => {
    if (
      await attemptReg(
        usernameReg,
        passwordReg,
        emailReg,
        setRegMessage,
        setRegSuccessful
      )
    ) {
      setUsernameReg('');
      setPasswordReg('');
      setEmailReg('');
    } else {
      setIsRegModalVisible(true);
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
    if (
      await attemptLogin(
        username,
        password,
        setUserNotFound,
        setLoginMessageModal,
        setLoginSuccessful
      )
    ) {
      setAuthStatus(await checkToken(localStorage.getItem('token')));
      setUsername('');
      setPassword('');
    } else {
      setIsRegModalVisible(true);
    }
  }, [username, password, setUsername, setPassword, setAuthStatus]);

  const handleClickRecover = useCallback(async () => {
    recoverAccount(username, password, setRecoverAccountModal);
    setUsername('');
    setPassword('');
  }, [username, password]);

  useEffect(() => {
    const checkAuth = async () => {
      setAuthStatus(await checkToken(localStorage.getItem('token')));
    };
    checkAuth();
  }, [setAuthStatus]);

  return (
    <AuthenticationContext.Provider
      value={{
        regData: {
          [USERNAME_KEY_REG]: {
            value: usernameReg,
            onChange: onChange({ setterFunction: setUsernameReg }),
          },
          [EMAIL_KEY]: {
            value: emailReg,
            onChange: onChange({ setterFunction: setEmailReg }),
          },
          [PASSWORD_KEY_REG]: {
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
        setAuthStatus,
        isRegModalVisible,
        setIsRegModalVisible,
        isAccountModalVisible,
        setIsAccountModalVisible,
        logoutModalVisible,
        setLogoutModalVisible,
        regMessage,
        setRegMessage,
        loginMessageModal,
        setLoginMessageModal,
        userNotFound,
        setUserNotFound,
        loginSuccessful,
        setLoginSuccessful,
        regSuccessful,
        setRegSuccessful,
        deleteAccountModalVisible,
        setDeleteAccountModalVisible,
        handleClickRecover,
        recoverAccountModal,
        setRecoverAccountModal,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
