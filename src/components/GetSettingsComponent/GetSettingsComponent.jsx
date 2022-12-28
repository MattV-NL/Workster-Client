import { useEffect, useContext } from 'react';
import { getSettings } from '../../restAPI/getSettings';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

const GetSettingsComponent = () => {
  const { authStatus } = useContext(AuthenticationContext);
  const {
    setDarkMode,
    setUnits,
    setEmailNotifications,
    setRainConflict,
    setSnowConflict,
    setWindConflict,
  } = useContext(UserSettingsContext);

  useEffect(() => {
    const checkSettings = async () => {
      getSettings(
        authStatus,
        setDarkMode,
        setUnits,
        setEmailNotifications,
        setRainConflict,
        setSnowConflict,
        setWindConflict
      );
    };
    checkSettings();
  }, [
    authStatus,
    setDarkMode,
    setUnits,
    setEmailNotifications,
    setRainConflict,
    setSnowConflict,
    setWindConflict,
  ]);
  return <></>;
};

export default GetSettingsComponent;
