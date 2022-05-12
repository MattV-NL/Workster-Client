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
        colors: {
          isOutside: '#0000ff',
          isWelding: '#4444d4',
          isScaffolding: '#5c5cfa',
        },
        type: 'bar',
        names: {
          isOutside: 'Outside',
          isWelding: 'Welding',
          isScaffolding: 'Scaffolding',
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
        y: {
          label: {
            text: 'Number of days for each task in the work scope',
            position: 'outer-middle',
          },
        },
      },
    });
  }, [workDataArr]);
  return <div id='chart'></div>;
};

export default WorkChart;
