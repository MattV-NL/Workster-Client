import Button from '../Inputs/Button';
import { useContext } from 'react';
import { WorkInputContext } from '../../contexts/WorkInputContext';

const WorkButton = () => {
  const { workDataUpdate } = useContext(WorkInputContext);

  return <Button onClick={workDataUpdate}>Enter Work Info</Button>;
};

export default WorkButton;
