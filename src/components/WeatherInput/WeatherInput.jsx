import '../Tables/tables.scss';
import { useContext } from 'react';
import { WeatherInputContext } from '../../contexts/WeatherInputContext';
import Input from '../Inputs/Input';
import { weatherInputs } from '../../constants';

const WeatherInput = () => {
  const { weatherData } = useContext(WeatherInputContext);

  // useMemo(() => {
  //   weatherInputs.map((items) => {
  //     items.onChange = submitValues;
  //   });
  //   weatherInputs[0].value = date;
  //   weatherInputsArray[1].value = precip;
  //   weatherInputsArray[2].value = wind;
  //   // I know there must be a better way to do this part but I couldn't think of it at the time
  // }, [date, precip, wind]);
  // this is just for learning purposes

  return (
    <div className='table-input-row'>
      {[...weatherInputs.values()].map(({ type, required, id }) => {
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
