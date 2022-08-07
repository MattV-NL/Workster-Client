export const WORK_DATE_KEY = 'work-date';
export const OUTSIDE_KEY = 'outside-input';
export const WELD_KEY = 'welding-input';
export const SCAFF_KEY = 'scaffolding-input';
export const DETAILS_KEY = 'details-input';
export const LATITUDE_KEY = 'latitude-input';
export const LONGITUDE_KEY = 'longitude-input';
export const GEOLOCATION_KEY = 'geolocation-input';
export const USERNAME_KEY = 'username-input';
export const PASSWORD_KEY = 'password-input';

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

export const DATE_KEY = 'date-input';

export const PRECIP_KEY = 'precip-input';

export const WIND_KEY = 'wind-input';

export const weatherHeader = new Map(
  [
    {
      title: 'Date',
      id: DATE_KEY,
      type: 'date',
      required: true,
    },
    {
      title: 'Chance of Rain (%)',
      id: PRECIP_KEY,
      type: 'number',
      required: true,
    },
    {
      title: 'Wind Speed (km/hr)',
      id: WIND_KEY,
      type: 'number',
      required: true,
    },
  ].map((weatherHeader) => [weatherHeader.id, weatherHeader])
);

export const paths = {
  HOME: '/Work-Weather-Analyzer',
  WEATHER: '/Work-Weather-Analyzer/weather',
  WORK: '/Work-Weather-Analyzer/work',
};
export const LOCATION_KEY = 'location';

export const locationInput = {
  title: 'Location',
  label: 'Location',
  id: LOCATION_KEY,
  type: 'text',
  required: false,
};

export const SERVER_URL = {
  weather: 'http://localhost:8000/api/weather/',
};
