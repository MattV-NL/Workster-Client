import { useContext, useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/plots';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';

const WeatherChart2 = () => {
  const { weatherChartValues } = useContext(WeatherDataContext);
  const [config, setConfig] = useState();

  // not yet working, attemping to get antd chart working instead of c3
  // to use antd ui elements

  useEffect(() => {
    const data = [Array.from([weatherChartValues.values()])];
    setConfig({
      data: [data, data],
      xField: 'date',
      yField: ['wind', 'precip'],
      geometryOptions: [
        {
          geometry: 'column',
        },
        {
          geometry: 'line',
          lineStyle: {
            lineWidth: 2,
          },
        },
      ],
    });
  }, [setConfig, weatherChartValues]);

  return <DualAxes {...config} />;
};

export default WeatherChart2;
