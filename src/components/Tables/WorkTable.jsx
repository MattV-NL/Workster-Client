import './tables.scss';
import { workFormInputs } from '../../constants';
import { useCallback, useContext } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import WorkDetailsModal from '../Modals/WorkDetailsModal';
import { WorkInputContext } from '../../contexts/WorkInputContext';

const displayBooleanInput = (checked) => {
  if (typeof checked === 'boolean') {
    return checked ? 'Yes' : 'No';
  }

  return false;
};

const WorkTable = () => {
  const { workValues } = useContext(WorkDataContext);
  const { setModalDisplay } = useContext(WorkInputContext);

  const handleClick = useCallback(() => {
    setModalDisplay('flex');
  }, [setModalDisplay]);
  return (
    <>
      <div className='work-table'>
        <div className='work-table-header-row'>
          {[...workFormInputs.values()].map(({ title, id }) => (
            <div key={`${id}`}>{title}</div>
          ))}
        </div>
        <div className='work-table-body'>
          {Array.from(workValues.values()).map(
            ({ date, isOutside, isWelding, isScaffolding, workDetails }) => (
              <div className='work-table-row' key={date}>
                <div className='work-cells'>{date}</div>
                <div className='work-cells'>
                  {displayBooleanInput(isOutside)}
                </div>
                <div className='work-cells'>
                  {displayBooleanInput(isWelding)}
                </div>
                <div className='work-cells'>
                  {displayBooleanInput(isScaffolding)}
                </div>
                <div className='work-cells' onClick={handleClick}>
                  {workDetails}
                </div>
                <WorkDetailsModal key={date}>{workDetails}</WorkDetailsModal>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default WorkTable;
