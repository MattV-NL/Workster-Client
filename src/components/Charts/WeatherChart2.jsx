import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { DualAxes } from '@ant-design/plots';

const WeatherChart2 = () => {
  const { weatherChartValues } = useContext(WeatherDataContext);

  const weatherChartMap = new Map(weatherChartValues);
  console.log('chart rendered');

  const data = Array.from(weatherChartMap.values());

  const config = {
    data: [data, data],
    xField: 'date',
    yField: ['precip', 'wind'],
    geometryOptions: [
      {
        geometry: 'line',
        color: '#5B8FF9',
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
      },
    ],
  };

  return <DualAxes {...config} />;
};

export default WeatherChart2;
