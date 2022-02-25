import './FirstChart.css';
import './c3.min.css';
import c3 from 'c3';
import { useEffect } from 'react';



const FirstChart = () => {

  useEffect(() => {
    c3.generate({

      bindto: '#chart',
      data: {
        data: {
          json: [
              {name: 'Monday', Precipitation: 20, WindSpeed: 65},
              {name: 'Tuesday', Precipitation: 10, WindSpeed: 50},
              {name: 'Wednesday', Precipitation: 0, WindSpeed: 25},
              {name: 'Thursday', Precipitation: 40, WindSpeed: 85},
              {name: 'Friday', Precipitation: 0, WindSpeed: 55},
              {name: 'Saturday', Precipitation: 0, WindSpeed: 35},
              {name: 'Sunday', Precipitation: 15, WindSpeed: 60},
          ],
          keys: {
              x: 'name',
              value: ['Precipitation', 'WindSpeed'],
          }
      },
      axis: {
          x: {
              type: 'category'
          }
      }
      }
    });
  }, []);

  return (
    <div id='chart' className='table-chart'></div>
  )
}

export default FirstChart
