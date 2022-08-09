import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { DualAxes } from '@ant-design/plots';
import './charts.scss';

const WeatherChart = () => {
  const { weatherChartValues } = useContext(WeatherDataContext);

  const weatherChartMap = new Map(weatherChartValues);
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
    xAxis: {
      label: {
        position: 'bottom',
        style: {
          fill: '#fff',
          fontSize: 12,
        },
      },
    },
  };

  return (
    <div className='chart'>
      <div className='chart-title'>
        Chance of Precipitation and Wind Speed on a Given Day
      </div>
      <div className='weather-chart-container'>
        <div className='chart-axis'>
          <div className='chart-axis-label'>Chance of Precipitation</div>
        </div>

        <DualAxes {...config} />
        <div className='chart-axis'>
          <div className='chart-axis-label'>Wind Speed in Km/Hr</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherChart;
