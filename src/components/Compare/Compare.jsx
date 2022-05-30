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
      <Button onClick={compareValues}>Compare Work and Weather</Button>
      <div className='compare-message'>
        {isConflict
          ? 'You may want to look at your work scope and see if something can be rescheduled since there is work you have scheduled with special conditions during days or harsh weather.'
          : 'Great! there are no scheduling conflicts with the weather information you have entered.'}
      </div>
    </div>
  );
};

export default Compare;
