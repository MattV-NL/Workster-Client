import { SERVER_EP } from '../constants';

export const checkToken = async (token) => {
  const response = await fetch(`${SERVER_EP.authCheck}`, {
    headers: {
      'x-access-token': token,
    },
  });
  return response.json();
};

export const attemptLogin = async (
  username,
  password,
  setUserNotFound,
  setLoginMessageModal,
  setLoginSuccessful
) => {
  if (username && password) {
    const loginData = {
      username,
      password,
    };
    const response = await fetch(SERVER_EP.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const returnedData = await response.json();
    localStorage.setItem('token', returnedData.token);
    setLoginSuccessful(returnedData.auth);
    setUserNotFound(returnedData.userNotFound);
    setLoginMessageModal(returnedData.loginMessageModal);
    return true;
  } else {
    return false;
  }
};

export const attemptReg = async (
  usernameReg,
  passwordReg,
  emailReg,
  setRegMessage,
  setRegSuccessful
) => {
  if (usernameReg && passwordReg && emailReg) {
    const regData = {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
    };
    const response = await fetch(SERVER_EP.register, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(regData),
    });
    const message = await response.json();
    setRegMessage(message.status);
    setRegSuccessful(message.successful);
    return true;
  } else {
    return false;
  }
};

export const recoverAccount = async (
  username,
  password,
  setRecoverAccountModal
) => {
  const userData = {
    username,
    password,
  };
  const response = await fetch(SERVER_EP.recoverAccount, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const message = await response.json();
  setRecoverAccountModal(message.successful);
  return;
};
