import { SERVER_URL } from '../constants';

export const getSettings = async (
  authStatus,
  setDarkMode,
  setUnits,
  setEmailNotifications
) => {
  if (await authStatus.auth) {
    const response = await fetch(SERVER_URL.getSettings, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authStatus),
    });
    const returnedData = await response.json();
    setDarkMode(returnedData[0].darkmode_on);
    setUnits(returnedData[0].measurement_unit);
    setEmailNotifications(returnedData[0].email_notifications);
  } else {
    return;
  }
};
