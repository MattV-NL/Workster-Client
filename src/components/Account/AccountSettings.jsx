import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Switch } from 'antd';
import { useContext, useCallback } from 'react';
import './account.scss';
import SaveSettingsButton from './SaveSettingsButton';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';

const AccountSettings = () => {
  const { clearWeatherValues } = useContext(WeatherDataContext);
  const {
    darkMode,
    setDarkMode,
    emailNotifications,
    setEmailNotifications,
    units,
    setUnits,
  } = useContext(UserSettingsContext);

  const onChange = useCallback(
    (checked) => {
      setDarkMode(checked);
    },
    [setDarkMode]
  );

  const onChangeNotifications = useCallback(
    (checked) => {
      setEmailNotifications(checked);
    },
    [setEmailNotifications]
  );

  const unitsOptions = ['metric', 'imperial', 'standard'];

  const unitsMenu = unitsOptions.map((unit) => {
    return {
      label: (
        <div
          onClick={() => {
            setUnits(unit);
            clearWeatherValues();
          }}
        >
          {unit}
        </div>
      ),
    };
  });

  const menu = <Menu items={unitsMenu} />;

  return (
    <div className={darkMode ? 'dark-page-layout' : 'light-page-layout'}>
      <div className='page'>
        <div className={darkMode ? 'dark-page-header' : 'light-page-header'}>
          User Settings
        </div>
        <div className='sub-header'>Dark Mode</div>
        <div className='account-setting'>
          Off
          <Switch checked={darkMode} onChange={onChange} /> On
        </div>
        <div className='sub-header'>Measurement Unit</div>
        <div className={darkMode ? 'dark-dropdown' : 'light-dropdown'}>
          <Dropdown overlay={menu} trigger={'click'}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Units
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div>{`Selected Units ${units}`}</div>
        <div className='sub-header'>Email Notifications</div>
        <div className='account-setting'>
          Off
          <Switch
            checked={emailNotifications}
            onChange={onChangeNotifications}
          />{' '}
          On
        </div>
        <SaveSettingsButton />
      </div>
    </div>
  );
};

export default AccountSettings;
