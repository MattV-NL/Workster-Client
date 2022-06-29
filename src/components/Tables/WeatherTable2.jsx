import { useContext } from 'react';
import { WeatherDataContext2 } from '../../contexts/WeatherDataContext2';
import { weatherHeader } from '../../constants';
import './tables.scss';

const WeatherTable2 = () => {
  const { weatherValues2 } = useContext(WeatherDataContext2);

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
        {Array.from(weatherValues2.values()).map(({ dt, pop, wind_speed }) => {
          let date = new Date(dt * 1000).toDateString();
          let precip = pop * 100;
          let windSpeed = wind_speed * 3.6;

          return (
            <div className='weather-row' key={`${date}-${precip}`}>
              <div className='weather-cells'>{date}</div>
              <div className='weather-cells'>{precip}</div>
              <div className='weather-cells'>{windSpeed}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherTable2;
