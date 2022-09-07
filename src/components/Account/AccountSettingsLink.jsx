import { SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';

const AccountSettingsLink = () => {
  return (
    <Link
      to={paths.SETTINGS}
      className='page-navbar-item'
      onClick={() => {
        console.log('settings icon clicked');
      }}
    >
      <SettingOutlined />
      {'  '}
      Settings
    </Link>
  );
};

export default AccountSettingsLink;
