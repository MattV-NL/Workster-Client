import './tables.scss';
import { workFormInputs } from '../../constants';
import { useContext } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { Link } from 'react-router-dom';

const displayBooleanInput = (checked) => {
  if (typeof checked === 'boolean') {
    return checked ? 'Yes' : 'No';
  }

  return false;
};

const WorkTable = () => {
  const { workValues } = useContext(WorkDataContext);
  const workValuesKeys = workValues.keys();

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
              <Link
                className='work-table-link'
                to={`/work-details/${workValuesKeys.next().value}`}
                key={date}
              >
                <div className='work-table-row'>
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
                  <div className='work-cells'>{workDetails}</div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default WorkTable;
