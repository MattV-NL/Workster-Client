import { useCallback, useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Button from '../Inputs/Button';
import './sortTable.scss';

const SortWeatherTable = () => {
  const { tableOrder, setTableOrder, weatherValues, setWeatherValues } =
    useContext(WeatherDataContext);

  const changeTableOrder = useCallback(() => {
    if (tableOrder) {
      const sortedWeatherMap = new Map(
        [...weatherValues].sort((a, b) => a[0] - b[0])
      );
      setWeatherValues(sortedWeatherMap);
      setTableOrder(!tableOrder);
    } else {
      const reverseSortWeatherMap = new Map(
        [...weatherValues].sort((a, b) => b[0] - a[0])
      );
      setWeatherValues(reverseSortWeatherMap);
      setTableOrder(!tableOrder);
    }
  }, [tableOrder, setTableOrder, weatherValues, setWeatherValues]);

  return (
    <div className='sort-button-container'>
      <Button onClick={changeTableOrder}>Reverse Table Order</Button>
    </div>
  );
};

export default SortWeatherTable;
