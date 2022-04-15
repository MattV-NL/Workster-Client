import '../Tables/tables.scss';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';
import Input from './Input';

const WeatherInput2 = () => {
  const { date, precip, wind, submitDate, submitPrecip, submitWind } =
    useContext(InputContext);

  const weatherInputsArray = [
    {
      name: 'date',
      value: date,
      type: 'date',
      required: true,
      onChange: submitDate,
    },
    {
      name: 'precip',
      value: precip || '',
      type: 'number',
      required: true,
      onChange: submitPrecip,
    },
    {
      name: 'wind',
      value: wind || '',
      type: 'number',
      required: true,
      onChange: submitWind,
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

export default WeatherInput2;
