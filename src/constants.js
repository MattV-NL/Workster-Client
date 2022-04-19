export const TABLE_ORDER = ['date', 'precip', 'wind'];

export const weatherInputsArray = [
  {
    id: 'date-input',
    type: 'date',
    required: true,
  },
  {
    id: 'precip-input',
    type: 'number',
    required: true,
  },
  {
    id: 'wind-input',
    type: 'number',
    required: true,
  },
];

export const workFormArray = [
  {
    label: 'Date',
    id: 'work-date',
    type: 'date',
    required: true,
  },
  {
    label: 'Will there be work outside?',
    id: 'outside-input',
    type: 'checkbox',
    required: true,
  },
  {
    label: 'Will there be welding involved?',
    id: 'welding-input',
    type: 'checkbox',
    required: true,
  },
  {
    label: 'Is scaffolding required?',
    id: 'scaffolding-input',
    type: 'checkbox',
    required: true,
  },
  {
    label: 'Work Details',
    id: 'details-input',
    type: 'text',
    required: true,
  },
];
