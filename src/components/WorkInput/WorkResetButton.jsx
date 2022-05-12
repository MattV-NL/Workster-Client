import { useContext } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import Button from '../Inputs/Button';

const WorkResetButton = () => {
  const { clearWorkValues } = useContext(WorkDataContext);

  return <Button onClick={clearWorkValues}>Reset Work Info</Button>;
};

export default WorkResetButton;
