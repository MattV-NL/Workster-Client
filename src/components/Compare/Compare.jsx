import { useContext, useCallback, useState } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import Button from '../Inputs/Button';
import './compare.scss';

const Compare = () => {
  const { weatherValues } = useContext(WeatherDataContext);
  const { workValues } = useContext(WorkDataContext);

  const [isConflict, setIsConflict] = useState(false);

  const compareValues = useCallback(() => {
    weatherValues.forEach(({ precip, wind }) => {
      workValues.forEach(({ isOutside, isWelding, isScaffolding }) => {
        if (
          (precip > 20 || wind > 40) &&
          (isOutside || isWelding || isScaffolding)
        ) {
          setIsConflict(true);
        } else {
          // setIsConflict(false);
        }
      });
    });
  }, [workValues, weatherValues, setIsConflict]);

  return (
    <div className='compare-page-layout'>
      <div className='compare-message'>
        {isConflict ? 'conflict' : 'no conflict'}
      </div>
      <Button onClick={compareValues}>Compare Work and Weather</Button>
    </div>
  );
};

export default Compare;
