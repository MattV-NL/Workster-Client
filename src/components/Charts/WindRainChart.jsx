import './charts.css';
import './c3.min.css';
import c3 from 'c3';
import { useEffect, useContext } from 'react';
import { FirstContext } from '../../contexts/FirstContext';

const WindRainChart = () => {
  const {weatherValue} = useContext(FirstContext);

  useEffect(() => {
    c3.generate({

      bindto: '#chart',
        data: {
          json: weatherValue,
          keys: {
              x: 'name',
              value: ['Precipitation', 'WindSpeed'],
          },
          colors: {
            Precipitation: '#0000ff',
            WindSpeed: 'D5840E'
      },
    },
      axis: {
          x: {
              type: 'category'
          }
      }
    });
  }, []);

  return (
    <div id='chart' className='wind-rain-chart'></div>
  )
}

export default WindRainChart
