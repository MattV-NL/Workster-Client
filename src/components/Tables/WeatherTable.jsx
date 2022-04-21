import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import WeatherInput from '../WeatherInput/WeatherInput';
import WeatherWarning from '../Warnings/WeatherWarning';
import { weatherInputs } from '../../constants';
import './tables.scss';

const WeatherTable = () => {
  const { weatherValues } = useContext(DataContext);

  return (
    <div className='weather-table'>
      <div className='weather-table-header-row'>
        {[...weatherInputs.values()].map(({ title, id }) => (
          <div key={id}>{title}</div>
        ))}
      </div>
      <div className='weather-table-body'>
        {weatherValues.map(({ date, precip, wind }) => (
          <div className='weather-row' key={`${date}-${precip}`}>
            <div className='weather-cells'>{date}</div>
            <div className='weather-cells'>{precip}</div>
            <div className='weather-cells'>{wind}</div>
          </div>
        ))}
      </div>
      <WeatherInput />
      <WeatherWarning />
    </div>
  );
};

export default WeatherTable;
