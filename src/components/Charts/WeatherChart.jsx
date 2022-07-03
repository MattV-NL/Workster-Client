import './charts.scss';
import './c3.min.css';
import c3 from 'c3';
import { useEffect, useContext } from 'react';
import { WeatherDataContext2 } from '../../contexts/WeatherDataContext2';
import Chart from './Chart';

const WeatherChart = () => {
  const { weatherChartValues } = useContext(WeatherDataContext2);

  useEffect(() => {
    c3.generate({
      bindto: '#weather-chart',
      data: {
        json: weatherChartValues,
        keys: {
          x: 'date',
          value: ['precip', 'wind'],
        },
        colors: {
          precip: '#4444d4',
          wind: '#0000f4',
        },
        names: {
          precip: 'Chance of Precipitation (%)',
          wind: 'Wind Speed (km/hr)',
        },
        types: {
          precip: 'bar',
          wind: 'line',
        },
      },
      axis: {
        x: {
          type: 'category',
          tick: {
            rotate: -45,
          },
        },
      },
    });
  }, [weatherChartValues]);

  return <Chart id={'weather-chart'} className={'weather-chart'} />;
};

export default WeatherChart;
