import { useContext, useMemo } from 'react';
import { WorkDataContext } from '../../contexts/WorkDataContext';
import { Column } from '@ant-design/plots';

const WorkChart = () => {
  const { workValues } = useContext(WorkDataContext);

  const json = useMemo(() => {
    const arrWork = [...workValues.values()];

    return [
      {
        id: 'isOutside',
        count: arrWork.filter(({ isOutside }) => isOutside).length,
      },
      {
        id: 'isWelding',
        count: arrWork.filter(({ isWelding }) => isWelding).length,
      },
      {
        id: 'isScaffolding',
        count: arrWork.filter(({ isScaffolding }) => isScaffolding).length,
      },
    ];
  }, [workValues]);

  const data = json;
  const config = {
    data,
    xField: 'id',
    yField: 'count',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
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
  return <Column {...config} />;
};

export default WorkChart;
