import '../Tables/tables.scss';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';
import Input from '../Inputs/Input';

const WeatherInput = () => {
  const { date, precip, wind, submitValues } = useContext(InputContext);

  const weatherInputsArray = [
    {
      id: 'date-input',
      name: 'date',
      value: date,
      type: 'date',
      required: true,
      onChange: submitValues,
    },
    {
      id: 'precip-input',
      name: 'precip',
      value: precip || '',
      type: 'number',
      required: true,
      onChange: submitValues,
    },
    {
      id: 'wind-input',
      name: 'wind',
      value: wind || '',
      type: 'number',
      required: true,
      onChange: submitValues,
    },
  ];

  return (
    <div className='table-input-row'>
      {weatherInputsArray.map(({ name, value, type, required, onChange }) => {
        return (
          <div className='input-cells' key={name}>
            <Input
              onChange={onChange}
              type={type}
              value={value}
              required={required}
            ></Input>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherInput;
