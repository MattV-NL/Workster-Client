import { SERVER_URL } from '../constants';

export const checkToken = async (token) => {
  const response = await fetch(SERVER_URL.authCheck, {
    headers: {
      'x-access-token': token,
    },
  });
  return await response.json();
};

export const attemptLogin = async (username, password) => {
  if (username && password) {
    const loginData = {
      username,
      password,
    };
    const response = await fetch(SERVER_URL.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const returnedData = await response.json();
    localStorage.setItem('token', returnedData.token);
    return true;
  } else {
    return false;
  }
};

export const attemptReg = async (usernameReg, passwordReg, emailReg) => {
  if (usernameReg && passwordReg && emailReg) {
    const regData = {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
    };
    await fetch(SERVER_URL.register, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(regData),
    });
    return true;
  } else {
    return false;
  }
};
