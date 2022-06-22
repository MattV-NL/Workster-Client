import { useCallback, useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Button from '../Inputs/Button';
import './sortTable.scss';

const sortTable = (tableOrder) => (a, b) =>
  tableOrder ? a[0] - b[0] : b[0] - a[0];

const SortWeatherTable = () => {
  const { tableOrder, setTableOrder, weatherValues, setWeatherValues } =
    useContext(WeatherDataContext);

  const changeTableOrder = useCallback(() => {
    const sortedWeatherMap = new Map(
      [...weatherValues].sort(sortTable(tableOrder))
    );
    setWeatherValues(sortedWeatherMap);
    setTableOrder(!tableOrder);
  }, [tableOrder, setTableOrder, weatherValues, setWeatherValues]);

  return (
    <div className='sort-button-container'>
      <Button onClick={changeTableOrder}>Reverse Table Order</Button>
    </div>
  );
};

export default SortWeatherTable;
