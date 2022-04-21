export const TABLE_ORDER = ['date', 'precip', 'wind'];

export const workFormArray = [
  {
    title: 'Date',
    label: 'Date',
    id: 'work-date',
    type: 'date',
    required: true,
  },
  {
    title: 'Outside',
    label: 'Will there be work outside?',
    id: 'outside-input',
    type: 'checkbox',
    required: true,
  },
  {
    title: 'Welding',
    label: 'Will there be welding involved?',
    id: 'welding-input',
    type: 'checkbox',
    required: true,
  },
  {
    title: 'Scaffolding',
    label: 'Is scaffolding required?',
    id: 'scaffolding-input',
    type: 'checkbox',
    required: true,
  },
  {
    title: 'Details',
    label: 'Work Details',
    id: 'details-input',
    type: 'text',
    required: true,
  },
];

export const DATE_KEY = 'date-input';

export const PRECIP_KEY = 'precip-input';

export const WIND_KEY = 'wind-input';

export const weatherInputs = new Map(
  [
    {
      title: 'Date',
      id: DATE_KEY,
      type: 'date',
      required: true,
    },
    {
      title: 'Precipitation',
      id: PRECIP_KEY,
      type: 'number',
      required: true,
    },
    {
      title: 'Wind Speed',
      id: WIND_KEY,
      type: 'number',
      required: true,
    },
  ].map((weatherInput) => [weatherInput.id, weatherInput])
);

export const WORK_KEY = '/work';
