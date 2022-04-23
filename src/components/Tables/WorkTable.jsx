import './tables.scss';
import { workFormInputs } from '../../constants';
import { useContext } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';

const WorkTable = () => {
  const { workValues } = useContext(WorkDataContext);
  return (
    <div className='work-table'>
      <div className='work-table-header-row'>
        {[...workFormInputs.values()].map(({ title, id }) => (
          <div key={`${id}`}>{title}</div>
        ))}
      </div>
      <div className='work-table-body'>
        {workValues.map(
          ({ formDate, isOutside, isWelding, isScaffolding, workDetails }) => (
            <div className='work-table-row' key={formDate}>
              <div className='work-cells'>{formDate}</div>
              <div className='work-cells'>{isOutside ? 'Yes' : 'No'}</div>
              <div className='work-cells'>{isWelding ? 'Yes' : 'No'}</div>
              <div className='work-cells'>{isScaffolding ? 'Yes' : 'No'}</div>
              <div className='work-cells'>{workDetails}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WorkTable;
