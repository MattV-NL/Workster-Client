import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import WeatherInput from '../WeatherInput/WeatherInput';
import { weatherHeader } from '../../constants';
import './tables.scss';

const WeatherTable = () => {
  const { weatherValues } = useContext(WeatherDataContext);

  return (
    <div className='weather-table'>
      <div className='weather-table-header-row'>
        {[...weatherHeader.values()].map(({ title, id }) => (
          <div key={id} className='header-item'>
            {title}
          </div>
        ))}
      </div>
      <div className='weather-table-body'>
        {Array.from(weatherValues.values()).map(({ date, precip, wind }) => (
          <div className='weather-row' key={`${date}-${precip}`}>
            <div className='weather-cells'>{date}</div>
            <div className='weather-cells'>{precip}</div>
            <div className='weather-cells'>{wind}</div>
          </div>
        ))}
      </div>
      <WeatherInput />
    </div>
  );
};

export default WeatherTable;
