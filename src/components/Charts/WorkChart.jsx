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

  Array.from(workValues.values()).map(
    ({ isOutside, isWelding, isScaffolding }) => {
      if (isOutside) {
        outCounter++;
      }
      if (isWelding) {
        weldCounter++;
      }
      if (isScaffolding) {
        scaffCounter++;
      }
    }
  );

  const workDataArr = [
    { isOutside: outCounter },
    { isWelding: weldCounter },
    { isScaffolding: scaffCounter },
  ];

  useEffect(() => {
    c3.generate({
      bindto: '#chart',
      data: {
        json: workDataArr,
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
          ratio: 0.8,
        },
      },
      axis: {
        x: {
          type: 'category',
          categories: ['', '', ''],
        },
      },
    });
  }, [outCounter, weldCounter, scaffCounter]);
  return <div id='chart'></div>;
};

export default WorkChart;
