export const TABLE_ORDER = ['date', 'precip', 'wind'];

export const weatherInputsArray = [
  {
    title: 'Date',
    id: 'date-input',
    type: 'date',
    required: true,
  },
  {
    title: 'Precipitation',
    id: 'precip-input',
    type: 'number',
    required: true,
  },
  {
    title: 'Wind Speed',
    id: 'wind-input',
    type: 'number',
    required: true,
  },
];

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
