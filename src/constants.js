export const WORK_DATE_KEY = 'work-date';
export const OUTSIDE_KEY = 'outside-input';
export const WELD_KEY = 'welding-input';
export const SCAFF_KEY = 'scaffolding-input';
export const DETAILS_KEY = 'details-input';
export const LATITUDE_KEY = 'latitude-input';
export const LONGITUDE_KEY = 'longitude-input';
export const GEOLOCATION_KEY = 'geolocation-input';
export const SAVE_LOCATION_KEY = 'save-location-input';
export const USERNAME_KEY = 'username-input';
export const PASSWORD_KEY = 'password-input';
export const USERNAME_KEY_REG = 'username-input-reg';
export const PASSWORD_KEY_REG = 'password-input-reg';
export const EMAIL_KEY = 'email-input';

export const workFormInputs = new Map(
  [
    {
      title: 'Date',
      label: 'Date',
      id: WORK_DATE_KEY,
      type: 'date',
      required: true,
    },
    {
      title: 'Outside',
      label: 'Will there be work outside?',
      id: OUTSIDE_KEY,
      type: 'checkbox',
      required: true,
    },
    {
      title: 'Welding',
      label: 'Will there be welding involved?',
      id: WELD_KEY,
      type: 'checkbox',
      required: true,
    },
    {
      title: 'Scaffolding',
      label: 'Is scaffolding required?',
      id: SCAFF_KEY,
      type: 'checkbox',
      required: true,
    },
    {
      title: 'Details',
      label: 'Work Details',
      id: DETAILS_KEY,
      type: 'text',
      required: true,
    },
  ].map((item) => [item.id, item])
);

export const positionFormInputs = new Map(
  [
    {
      title: 'Latitude',
      label: 'Latitude',
      id: LATITUDE_KEY,
      type: 'number',
      required: false,
    },
    {
      title: 'Longitude',
      label: 'Longitude',
      id: LONGITUDE_KEY,
      type: 'number',
      required: false,
    },
    {
      title: 'Geolocation',
      label: 'Use Current Position',
      id: GEOLOCATION_KEY,
      type: 'checkbox',
      required: false,
    },
    {
      title: 'SaveLocation',
      label: 'Save Location',
      id: SAVE_LOCATION_KEY,
      type: 'checkbox',
      required: false,
    },
  ].map((item) => [item.id, item])
);

export const loginFormInputs = new Map(
  [
    {
      title: 'username',
      label: 'Username',
      id: 'username-input',
      type: 'text',
      required: true,
    },
    {
      title: 'password',
      label: 'Password',
      id: 'password-input',
      type: 'password',
      required: true,
    },
  ].map((item) => [item.id, item])
);

export const regFormInputs = new Map(
  [
    {
      title: 'username',
      label: 'Username',
      id: 'username-input-reg',
      type: 'text',
      required: true,
    },
    {
      title: 'email',
      label: 'Email',
      id: 'email-input',
      type: 'text',
      required: true,
    },
    {
      title: 'password',
      label: 'Password',
      id: 'password-input-reg',
      type: 'password',
      required: true,
    },
  ].map((item) => [item.id, item])
);

export const DATE_KEY = 'date-input';

export const PRECIP_KEY = 'precip-input';

export const WIND_KEY = 'wind-input';

export const weatherTableColumns = new Map(
  [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Rainfall Amount',
      dataIndex: 'rain',
      key: 'rain',
    },
    {
      title: 'Snowfall Amount',
      dataIndex: 'snow',
      key: 'snow',
    },
    {
      title: 'Wind Speed',
      dataIndex: 'windSpeed',
      key: 'windSpeed',
    },
    {
      title: 'More Weather Info',
      dataIndex: 'details',
      key: 'details',
    },
  ].map((item) => [item.key, item])
);

export const workTableColumns = new Map(
  [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Outside',
      dataIndex: 'isOutside',
      key: 'isOutside',
    },
    {
      title: 'Welding',
      dataIndex: 'isWelding',
      key: 'isWelding',
    },
    {
      title: 'Scaffolding',
      dataIndex: 'isScaffolding',
      key: 'isScaffolding',
    },

    {
      title: 'Work Details',
      dataIndex: 'details',
      key: 'details',
    },
    {
      title: 'Work Location',
      dataIndex: 'workLocation',
      key: 'workLocation',
    },
  ].map((item) => [item.key, item])
);

export const locationsTableColumns = [
  {
    title: 'Latitude',
    dataIndex: 'latitudeLink',
    key: 'latitudeLink',
  },
  {
    title: 'Longitude',
    dataIndex: 'longitudeLink',
    key: 'longitudeLink',
  },
  {
    title: '',
    dataIndex: 'deleteRowIcon',
    key: 'deleteRowIcon',
  },
];

export const workInformationTableColumns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Outside',
    dataIndex: 'isOutside',
    key: 'isOutside',
  },
  {
    title: 'Welding',
    dataIndex: 'isWelding',
    key: 'isWelding',
  },
  {
    title: 'Scaffolding',
    dataIndex: 'isScaffolding',
    key: 'isScaffolding',
  },

  {
    title: 'Work Details',
    dataIndex: 'workDetails',
    key: 'workDetails',
  },
  {
    title: 'Date Saved',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '',
    dataIndex: 'deleteRowIcon',
    key: 'deleteRowIcon',
  },
];

export const paths = {
  DASHBOARD: '/',
  AUTH: '/authentication',
  WEATHER: '/weather',
  WORK: '/work',
  ACCOUNT: '/account',
  SAVED_WORK: '/account/saved_location_',
  SETTINGS: '/account/settings',
  ABOUT: '/about',
  RECOVER: '/recover_account',
  GITHUB: 'https://github.com/MattV-NL',
  LINKEDIN: 'https://www.linkedin.com/in/matthew-vey-4b9402151/',
};

export const SERVER_EP = {
  authCheck: '/api/auth_check',
  saveLocation: '/api/save_location',
  login: '/api/login',
  register: '/api/register',
  weather: '/api/weather',
  getLocations: '/api/get_locations',
  saveWorkInformation: '/api/save_work_information',
  getWorkInformation: '/api/get_work_information',
  deleteWorkInformation: '/api/delete_work_information',
  deleteLocation: '/api/delete_location',
  saveSettings: '/api/save_settings',
  getSettings: '/api/get_settings',
  deleteAccount: '/api/delete_account',
  softDeleteAccount: '/api/soft_delete_account',
  recoverAccount: '/api/recover_account',
};
