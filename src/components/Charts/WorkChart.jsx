import { useContext, useEffect, useMemo } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import './c3.min.css';
import c3 from 'c3';
import Chart from './Chart';

const WorkChart = () => {
  const { workValues } = useContext(WorkDataContext);

  const json = useMemo(() => {
    const arrWork = [...workValues.values()];

    return [
      {
        id: 'isOutside',
        isOutside: arrWork.filter(({ isOutside }) => isOutside).length,
      },
      {
        id: 'isWelding',
        isWelding: arrWork.filter(({ isWelding }) => isWelding).length,
      },
      {
        id: 'isScaffolding',
        isScaffolding: arrWork.filter(({ isScaffolding }) => isScaffolding)
          .length,
      },
    ];
  }, [workValues]);

  useEffect(() => {
    c3.generate({
      bindto: '#chart',
      data: {
        json,
        keys: {
          x: 'id',
          value: ['isOutside', 'isWelding', 'isScaffolding'],
        },
        groups: [['isOutside', 'isWelding', 'isScaffolding']],
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
          ratio: 0.6,
        },
      },
      axis: {
        x: {
          type: 'category',
        },
        y: {
          tick: {
            format: (num) => (parseInt(num) === num ? num : undefined),
          },
        },
      },
    });
  }, [json]);
  return <Chart id={'chart'} className={'work-chart'} />;
};

export default WorkChart;
