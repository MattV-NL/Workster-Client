import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import WeatherInput from '../Inputs/WeatherInput';
import WeatherInput2 from '../Inputs/WeatherInput2';
import WeatherWarning from '../Warnings/WeatherWarning';
import './tables.scss';

const WeatherTable = () => {
  const { weatherValues } = useContext(DataContext);

  const tableHead = ['Date', 'Precipitation', 'Wind Speed'];

  return (
    <div className='weather-table'>
      <div className='table-header-row'>
        {tableHead.map((item) => (
          <div className='header-cells' key={`${item}`}>
            {item}
          </div>
        ))}
      </div>
      <div className='table'>
        {weatherValues.map(({ date, precip, wind }) => (
          <div className='row' key={`${date}-${precip}`}>
            <div className='cells'>{date}</div>
            <div className='cells'>{precip}</div>
            <div className='cells'>{wind}</div>
          </div>
        ))}
      </div>
      <WeatherInput2 />
      {/* <WeatherInput /> */}
      <WeatherWarning />
    </div>
  );
};

export default WeatherTable;
