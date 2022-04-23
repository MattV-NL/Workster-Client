import './charts.scss';
import './c3.min.css';
import c3 from 'c3';
import { useEffect, useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';

const WeatherChart = () => {
  const { weatherValues } = useContext(WeatherDataContext);

  useEffect(() => {
    c3.generate({
      bindto: '#chart',
      data: {
        json: weatherValues,
        keys: {
          x: 'date',
          value: ['precip', 'wind'],
        },
        colors: {
          precip: '#0000ff',
          wind: '#D5840E',
        },
        names: {
          precip: 'Precipitation',
          wind: 'Wind Speed',
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
  }, [weatherValues]);

  return <div id='chart'></div>;
};

export default WeatherChart;
