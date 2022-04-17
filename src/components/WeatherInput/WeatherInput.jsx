import '../Tables/tables.scss';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';
import Input from '../Inputs/Input';

const WeatherInput = () => {
  const { date, precip, wind, submitValues } = useContext(InputContext);

  const weatherInputsArray = [
    {
      id: 'date-input',

      value: date,
      type: 'date',
      required: true,
      onChange: submitValues,
    },
    {
      id: 'precip-input',

      value: precip || '',
      type: 'number',
      required: true,
      onChange: submitValues,
    },
    {
      id: 'wind-input',

      value: wind || '',
      type: 'number',
      required: true,
      onChange: submitValues,
    },
  ];

  return (
    <div className='table-input-row'>
      {weatherInputsArray.map(({ value, type, required, onChange, id }) => {
        return (
          <div className='input-cells' key={id}>
            <Input
              id={id}
              onChange={onChange}
              type={type}
              value={value}
              required={required}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WeatherInput;
