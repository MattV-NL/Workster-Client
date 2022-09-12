import './account.scss';
import ButtonComp from '../Inputs/Button';
import { SaveOutlined } from '@ant-design/icons';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { UnitsContext } from '../../contexts/UnitsContext';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { SERVER_URL } from '../../constants';
import { useCallback, useContext } from 'react';

const SaveSettingsButton = () => {
  const { authStatus } = useContext(AuthenticationContext);
  const { darkMode } = useContext(DarkModeContext);
  const { units } = useContext(UnitsContext);

  const sendSettingInformation = useCallback(async () => {
    const settingsJSON = {
      darkMode: darkMode,
      units: units,
      user_id: authStatus.user_id,
    };
    const response = await fetch(SERVER_URL.saveSettings, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settingsJSON),
    });
    const savedSettings = await response.json();
    console.log(savedSettings);
  }, [darkMode, authStatus, units]);

  return (
    <ButtonComp type={'primary'} onClick={sendSettingInformation}>
      <SaveOutlined />
      {'   '}Save Settings
    </ButtonComp>
  );
};

export default SaveSettingsButton;
