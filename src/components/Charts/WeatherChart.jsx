import './charts.scss';
import './c3.min.css';
import c3 from 'c3';
import { useEffect, useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { WeatherDataContext2 } from '../../contexts/WeatherDataContext2';
import Chart from './Chart';

const WeatherChart = () => {
  const { weatherValues } = useContext(WeatherDataContext);
  const { weatherChartArray } = useContext(WeatherDataContext2);

  console.log(weatherChartArray);

  useEffect(() => {
    c3.generate({
      bindto: '#weather-chart',
      data: {
        json: weatherChartArray,
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
          wind: 'spline',
        },
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            rotate: -45,
            format: '%Y-%m-%d',
          },
        },
      },
    });
  }, [weatherChartArray]);

  return <Chart id={'weather-chart'} className={'weather-chart'} />;
};

export default WeatherChart;
