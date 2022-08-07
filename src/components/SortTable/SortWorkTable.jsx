import { useCallback, useContext } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import './sortTable.scss';
import ButtonComp from '../Inputs/Button';

const sortTable = (tableOrder) => (a, b) =>
  tableOrder ? a[0] - b[0] : b[0] - a[0];

const SortWorkTable = () => {
  const { tableOrder, setTableOrder, workValues, setWorkValues } =
    useContext(WorkDataContext);

  const changeTableOrder = useCallback(() => {
    const sortedWorkMap = new Map([...workValues].sort(sortTable(tableOrder)));
    setWorkValues(sortedWorkMap);
    setTableOrder(!tableOrder);
  }, [tableOrder, setTableOrder, workValues, setWorkValues]);

  return (
    <div className='sort-button-container'>
      <ButtonComp type='primary' onClick={changeTableOrder}>
        Reverse Table Order
      </ButtonComp>
    </div>
  );
};

export default SortWorkTable;
