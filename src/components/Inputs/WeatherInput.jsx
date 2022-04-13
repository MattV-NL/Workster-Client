import '../Tables/tables.scss';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';
import Input from './Input';

const WeatherInput = () => {
  const { date, precip, wind, submitDate, submitPrecip, submitWind } =
    useContext(InputContext);

  return (
    <div className='table-input-row'>
      <div className='input-cells'>
        <Input type='date' value={date} required={true} onChange={submitDate} />
      </div>
      <div className='input-cells'>
        <Input
          type='number'
          value={precip || ''}
          placeholder='Precipitation'
          required={true}
          onChange={submitPrecip}
        />
      </div>
      <div className='input-cells'>
        <Input
          type='number'
          value={wind || ''}
          placeholder='Wind Speed'
          required={true}
          onChange={submitWind}
        />
      </div>
    </div>
  );
};

export default WeatherInput;
