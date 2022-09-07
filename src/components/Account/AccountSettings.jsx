import { Switch } from 'antd';
import { useContext, useCallback } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const AccountSettings = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const onChange = useCallback(
    (checked) => {
      setDarkMode(checked);
    },
    [setDarkMode]
  );
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      These are your settings
      <div className='account-setting'>
        Dark Mode
        <Switch checked={darkMode} onChange={onChange} />
      </div>
    </div>
  );
};

export default AccountSettings;
