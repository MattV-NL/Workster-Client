import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Switch } from 'antd';
import { useContext, useCallback } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { UnitsContext } from '../../contexts/UnitsContext';
import './account.scss';
import SaveSettingsButton from './SaveSettingsButton';

const AccountSettings = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { units, setUnits } = useContext(UnitsContext);
  const onChange = useCallback(
    (checked) => {
      setDarkMode(checked);
    },
    [setDarkMode]
  );

  const unitsOptions = ['metric', 'imperial', 'standard'];

  const unitsMenu = unitsOptions.map((unit) => {
    return {
      label: <div onClick={() => setUnits(unit)}>{unit}</div>,
    };
  });

  const menu = <Menu items={unitsMenu} />;

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='account-setting'>
        Dark Mode
        <Switch checked={darkMode} onChange={onChange} />
      </div>
      <div>{`Selected units ${units}`}</div>
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
      <SaveSettingsButton />
    </div>
  );
};

export default AccountSettings;
