import { useCallback, useContext, useState } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Button from '../Inputs/Button';
import './sortTable.scss';

const SortTable = () => {
  const { weatherValues, setWeatherValues } = useContext(WeatherDataContext);
  const [tableOrder, setTableOrder] = useState(true);

  const sortWeatherTable = useCallback(() => {
    if (tableOrder) {
      const reverseOrderWeatherMap = new Map(
        [...weatherValues].sort((a, b) => b[0] - a[0])
      );
      setWeatherValues(reverseOrderWeatherMap);
      setTableOrder(!tableOrder);
    } else {
      const reverseOrderWeatherMap = new Map(
        [...weatherValues].sort((a, b) => a[0] - b[0])
      );
      setWeatherValues(reverseOrderWeatherMap);
      setTableOrder(!tableOrder);
    }
  });

  return (
    <div className='button-container'>
      <Button onClick={sortWeatherTable}>Reverse Table Order</Button>
    </div>
  );
};

export default SortTable;
