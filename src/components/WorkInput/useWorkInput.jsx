import { useContext } from 'react';
import { WorkContext } from '../../contexts/WorkContext';
import { weatherInputsArray } from '../../constants';

const useWorkInput = () => {
  const { formDate, isOutside, isWelding, isScaffolding, workDetails } =
    useContext(WorkContext);

  const findValue = (item) => item.id === id;

  weatherInputsArray.find(findValue).value = formDate;

  return useWorkInput;
};

export default useWorkInput;
