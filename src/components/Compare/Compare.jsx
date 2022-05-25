import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { WorkDataContext } from '../../contexts/WorkDataContext';

const Compare = () => {
  const { weatherValues } = useContext(WeatherDataContext);
  const { workValues } = useContext(WorkDataContext);

  console.log(weatherValues);
  console.log(workValues);

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

  have a button to initiate the comparison
  */

  return <div>hello</div>;
};

export default Compare;
