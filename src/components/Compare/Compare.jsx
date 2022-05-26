import { useContext } from 'react';
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

  const compareValues = () => {
    Array.from(weatherValues.values()).map(({ precip, wind }) => {
      Array.from(workValues.values()).map(
        ({ isOutside, isWelding, isScaffolding }) => {
          if (
            (precip > 20 || wind > 40) &&
            (isOutside || isWelding || isScaffolding)
          ) {
            console.log(
              'perhaps reconsider you work schedule, there is weather on days where you have work planned that is not suited to deal with weather'
            );
          } else {
            console.log(
              'Great! Your schedule has no conflicts with the weather'
            );
          }
        }
      );
    });
  };

  return (
    <div>
      <Button onClick={compareValues}>Compare Work and Weather</Button>
    </div>
  );
};

export default Compare;
