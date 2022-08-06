import { useContext } from 'react';
import { WorkInputContext } from '../../contexts/WorkInputContext';
import Button2 from '../Inputs/Button';

const WorkButton = () => {
  const { workDataUpdate } = useContext(WorkInputContext);

  return (
    <div className='button-container'>
      <Button2 type='primary' onClick={workDataUpdate}>
        Enter Work Info
      </Button2>
    </div>
  );
};

export default WorkButton;
