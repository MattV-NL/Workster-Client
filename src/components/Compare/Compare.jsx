import { useContext, useCallback } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import Button from '../Inputs/Button';

const Compare = () => {
  const { weatherValues } = useContext(WeatherDataContext);
  const { workValues } = useContext(WorkDataContext);

  /*
  Compare the maps to see if there is significant weather on days
  where there is work outside, with welding or scaffolding as in the form
  */

  /*
  for each item in the maps (keys should always be the same) if the values 
  in the work object are true (not including the date) then check the
  values from the weather object and if there are below a threshold return
  a message

  if they are not below a threshold return a seperate message

  could also display both charts on this page to add content
  */

  const compareValues = useCallback(() => {
    weatherValues.forEach(({ precip, wind }) => {
      workValues.forEach(({ isOutside, isWelding, isScaffolding }) => {
        if (
          (precip > 20 || wind > 40) &&
          (isOutside || isWelding || isScaffolding)
        ) {
          console.log('conflict');
        } else {
          console.log('no conflict');
        }
      });
    });
  }, [workValues, weatherValues]);

  return (
    <div>
      <Button onClick={compareValues}>Compare Work and Weather</Button>
    </div>
  );
};

export default Compare;
