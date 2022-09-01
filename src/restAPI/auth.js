import { SERVER_URL } from '../constants';

export const checkToken = async (token) => {
  const response = await fetch(SERVER_URL.authCheck, {
    headers: {
      'x-access-token': token,
    },
  });
  return response.json();
};
