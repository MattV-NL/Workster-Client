import { useContext } from 'react';
import { WeatherDataContext2 } from '../../contexts/WeatherDataContext2';
import WeatherInput from '../WeatherInput/WeatherInput';
import { weatherInputs } from '../../constants';
import './tables.scss';

const WeatherTable2 = () => {
  const { weatherValues2 } = useContext(WeatherDataContext2);

  return (
    <div className='weather-table'>
      <div className='weather-table-header-row'>
        {[...weatherInputs.values()].map(({ title, id }) => (
          <div key={id} className='header-item'>
            {title}
          </div>
        ))}
      </div>
      <div className='weather-table-body'>
        {Array.from(weatherValues2.values()).map(
          ({ date, precip, windSpeed }) => (
            <div className='weather-row' key={`${date}-${precip}`}>
              <div className='weather-cells'>{date}</div>
              <div className='weather-cells'>{precip}</div>
              <div className='weather-cells'>{windSpeed}</div>
            </div>
          )
        )}
      </div>
      <WeatherInput />
    </div>
  );
};

export default WeatherTable2;
