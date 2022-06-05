import { useCallback, useContext } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import Button from '../Inputs/Button';
import './sortTable.scss';

const SortWorkTable = () => {
  const { tableOrder, setTableOrder, workValues, setWorkValues } =
    useContext(WorkDataContext);

  const handleClick = useCallback(() => {
    if (tableOrder) {
      const sortedWorkMap = new Map(
        [...workValues].sort((a, b) => a[0] - b[0])
      );
      setWorkValues(sortedWorkMap);
      setTableOrder(!tableOrder);
    } else {
      const reverseSortWorkMap = new Map(
        [...workValues].sort((a, b) => b[0] - a[0])
      );
      setWorkValues(reverseSortWorkMap);
      setTableOrder(!tableOrder);
    }
  }, [tableOrder, setTableOrder, workValues, setWorkValues]);

  return (
    <div className='sort-button-container'>
      <Button onClick={handleClick}>Reverse Table Order</Button>
    </div>
  );
};

export default SortWorkTable;
