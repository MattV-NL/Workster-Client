import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { DualAxes } from '@ant-design/plots';
import './charts.scss';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';

const WeatherChart = () => {
  const { weatherValues } = useContext(WeatherDataContext);
  const { darkMode } = useContext(UserSettingsContext);

  const windData = Array.from(weatherValues.values()).map(
    ({ dt, wind_speed }) => {
      const date = new Date(dt * 1000).toDateString();
      const windSpeed = wind_speed * 3.6;

      return {
        date,
        windSpeed,
      };
    }
  );

  const rainData = Array.from(weatherValues.values()).map(({ dt, rain }) => {
    const date = new Date(dt * 1000).toDateString();

    return {
      date,
      value: rain || 0,
      type: 'rain',
    };
  });

  const snowData = Array.from(weatherValues.values()).map(({ dt, snow }) => {
    const date = new Date(dt * 1000).toDateString();

    return {
      date,
      value: snow || 0,
      type: 'snow',
    };
  });

  const rainSnowData = rainData.concat(snowData);

  const config = {
    data: [rainSnowData, windData],
    xField: 'date',
    yField: ['value', 'windSpeed'],
    geometryOptions: [
      {
        geometry: 'column',
        isGroup: true,
        seriesField: 'type',
        columnWidthRatio: 0.4,
        label: {
          position: 'top',
          style: {
            fill: '#fff',
            shadowColor: '#000',
            shadowBlur: 10,
          },
        },
        color: ['#5B8FF9', '#5D7092'],
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
          fill: `${darkMode ? '#fff' : '#000'}`,
          fontSize: 12,
        },
      },
    },
  };

  return (
    <div className={darkMode ? 'dark-chart' : 'light-chart'}>
      <div className={darkMode ? 'dark-chart-title' : 'light-chart-title'}>
        Amount of Rain, Snow, and Wind in a Week
      </div>
      <div className='weather-chart-container'>
        <DualAxes {...config} />
      </div>
    </div>
  );
};

export default WeatherChart;
