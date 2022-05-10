import { useContext, useEffect } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import './c3.min.css';
import c3 from 'c3';
import './charts.scss';

const WorkChart = () => {
  const { workValues } = useContext(WorkDataContext);

  let outCounter = 0;
  let weldCounter = 0;
  let scaffCounter = 0;

  const workDataValues = Array.from(workValues.values()).map(
    ({ date, isOutside, isWelding, isScaffolding }) => {
      if (isOutside) {
        outCounter++;
        isOutside = outCounter;
      }
      if (isWelding) {
        weldCounter++;
        isWelding = weldCounter;
      }
      if (isScaffolding) {
        scaffCounter++;
        isScaffolding = scaffCounter;
      }
      return { date, isOutside, isWelding, isScaffolding };
    }
  );

  console.log(workDataValues);

  useEffect(() => {
    c3.generate({
      bindto: '#chart',
      data: {
        json: workDataValues,
        keys: {
          value: ['isOutside', 'isWelding', 'isScaffolding'],
        },
        type: 'bar',
        names: {
          isOutside: 'Number of days work will be outside',
          isWelding: 'Number of days there will be welding',
          isScaffolding: 'Number of days that required scaffolding support',
        },
      },
      bar: {
        width: {
          ratio: 0.5, // this makes bar width 50% of length between ticks
        },
      },
    });
  }, [workDataValues]);
  return <div id='chart'></div>;
};

export default WorkChart;
