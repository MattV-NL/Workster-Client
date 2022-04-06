import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import WeatherInput from '../Inputs/WeatherInput';
import './tables.scss';

const RainfallTable = () => {

  const {weatherValues} = useContext(DataContext);

  return (
    <div className='weather-table'>
      <div className='table-header-row'>
        <div className='header-cells'>Date</div>
        <div className='header-cells'>Precipitaion</div>
        <div className='header-cells'>Wind Speed</div>
      </div>
      <div className='table'>
        {weatherValues.map(({ date, precip, wind }) => (
          <div className='row' key = {`${date}-${precip}`}>
            <div className='cells'>{date}</div>
            <div className='cells'>{precip}</div>
            <div className='cells'>{wind}</div>
          </div>
          ))}            
      </div>
      <WeatherInput />
    </div>
  );
}

export default RainfallTable
