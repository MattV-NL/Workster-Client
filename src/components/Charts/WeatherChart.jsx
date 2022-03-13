import './charts.scss';
import './c3.min.css';
import c3 from 'c3';
import { useEffect, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

const WeatherChart = () => {
  const {weatherValues} = useContext(DataContext);

  useEffect(() => {
    c3.generate({

      bindto: '#chart',
        data: {
          json: weatherValues,
          keys: {
              x: 'date',
              value: ['Precipitation', 'WindSpeed'],
          },
          colors: {
            Precipitation: '#0000ff',
            WindSpeed: '#D5840E'
      },
    },
      axis: {
          x: {
              type: 'timeseries',
              tick: {
                rotate: -45,
                format: '%Y-%m-%d'
              }
          }
      }
    });
  }, [weatherValues]);

  return ( 
    <div id='chart'></div>
  );
}

export default WeatherChart
