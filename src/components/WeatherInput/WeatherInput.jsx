import '../Tables/tables.scss';
import { useContext } from 'react';
import { WeatherInputContext } from '../../contexts/WeatherInputContext';
import Input from '../Inputs/Input';
import { weatherHeader } from '../../constants';

const WeatherInput = () => {
  const { weatherData } = useContext(WeatherInputContext);

  return (
    <div className='table-input-row'>
      {[...weatherHeader.values()].map(({ type, required, id }) => {
        return (
          <div className='input-cells' key={id}>
            <Input
              id={id}
              onChange={weatherData[id].onChange}
              type={type}
              value={weatherData[id].value}
              required={required}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WeatherInput;
