import '../Tables/tables.scss';
import { useContext, useMemo } from 'react';
import { InputContext } from '../../contexts/InputContext';
import Input from '../Inputs/Input';
import { weatherInputsArray } from '../../constants';

const WeatherInput = () => {
  const { date, precip, wind, submitValues } = useContext(InputContext);

  useMemo(() => {
    weatherInputsArray.map((items) => {
      items.onChange = submitValues;
    });
    weatherInputsArray[0].value = date;
    weatherInputsArray[1].value = precip;
    weatherInputsArray[2].value = wind;
    // I know there must be a better way to do this part but I couldn't think of it at the time
  }, [date, precip, wind]);

  return (
    <div className='table-input-row'>
      {weatherInputsArray.map(({ value, type, required, onChange, id }) => {
        return (
          <div className='input-cells' key={id}>
            <Input
              id={id}
              onChange={onChange}
              type={type}
              value={value}
              required={required}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WeatherInput;
