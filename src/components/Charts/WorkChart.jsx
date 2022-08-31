import { useContext, useMemo } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { Column } from '@ant-design/plots';
import './charts.scss';

const WorkChart = () => {
  const { workValues } = useContext(WorkDataContext);

  const data = useMemo(() => {
    const arrWork = [...workValues.values()];

    return [
      {
        id: 'Outside',
        count: arrWork.filter(({ isOutside }) => isOutside).length,
      },
      {
        id: 'Welding',
        count: arrWork.filter(({ isWelding }) => isWelding).length,
      },
      {
        id: 'Scaffolding',
        count: arrWork.filter(({ isScaffolding }) => isScaffolding).length,
      },
    ];
  }, [workValues]);

  const config = {
    data,
    xField: 'id',
    yField: 'count',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        position: 'bottom',
        style: {
          fill: '#fff',
        },
      },
    },
    yAxis: {
      label: {
        style: {
          fill: '#fff',
          fontSize: 12,
        },
      },
    },
    meta: {
      id: {
        alias: 'Type of Work',
      },
      count: {
        alias: 'count',
      },
    },
  };

  return (
    <div className='chart'>
      <div className='chart-title'>
        Number of Instances of Each Task in Work Scope
      </div>
      <Column {...config} />
    </div>
  );
};

export default WorkChart;
