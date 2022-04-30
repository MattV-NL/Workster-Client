import './modals.scss';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';

const WorkDetails = () => {
  const { id } = useParams();
  const { workValues } = useContext(WorkDataContext);

  const workData = workValues.get(parseInt(id));

  return (
    <div className='work-details-container'>
      <h2>Work planned for {workData.date}</h2>
      <div className='work-details-content'>
        <p>
          {workData.isOutside ? 'Work will be outside' : 'Work will be inside'}
        </p>
        <p>
          {workData.isWelding
            ? 'This job requires welding'
            : 'No welding needed for this job'}
        </p>
        <p>
          {workData.isScaffolding
            ? 'Scaffolding will be required for this job'
            : 'No scaffolding needed for this job'}
        </p>
        <p>{workData.workDetails}</p>
      </div>
    </div>
  );
};

export default WorkDetails;