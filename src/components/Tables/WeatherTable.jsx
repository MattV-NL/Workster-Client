import { useCallback, useContext, useState } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import './tables.scss';
import { Table } from 'antd';
import { weatherTableColumns } from '../../constants';
import WeatherDetailsModal from '../Modals/WeatherDetailsModal';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import { weatherDetails } from '../../restAPI/weatherDetails';

const WeatherTable = () => {
  const { darkMode, units } = useContext(UserSettingsContext);
  const { weatherValues, setIsWeatherDetailsVisible } =
    useContext(WeatherDataContext);
  const weatherValuesKeys = weatherValues.keys();
  const [weatherDetailsKey, setWeatherDetailsKey] = useState('');

  const datasource = Array.from(weatherValues.values()).map(
    ({ dt, wind_speed, rain, snow }, index) => {
      const detailsKey = weatherValuesKeys.next().value;
      const date = new Date(dt * 1000).toDateString();
      let windSpeed = wind_speed;
      let speedUnit = 'km/hr';
      if (units === 'metric' || units === 'standard') {
        windSpeed = wind_speed * 3.6;
      } else if (units === 'imperial') {
        speedUnit = 'mi/hr';
      }
      const details = (
        <>
          <div
            onClick={() => {
              setWeatherDetailsKey(detailsKey);
              setIsWeatherDetailsVisible(true);
            }}
          >
            More Details...
          </div>
        </>
      );
      if (snow) {
        if (!snow) {
          snow = 0;
          return {
            date,
            rain: `${rain}mm`,
            snow: `${snow}mm`,
            windSpeed: `${windSpeed.toFixed(2)} ${speedUnit}`,
            details,
            key: index,
          };
        } else {
          return {
            date,
            rain: `${rain}mm`,
            snow: `${snow}mm`,
            windSpeed: `${windSpeed.toFixed(2)} ${speedUnit}`,
            details,
            key: index,
          };
        }
      } else {
        if (!rain) {
          rain = 0;
          return {
            date,
            rain: `${rain}mm`,
            windSpeed: `${windSpeed.toFixed(2)} ${speedUnit}`,
            details,
            key: index,
          };
        } else {
          return {
            date,
            rain: `${rain}mm`,
            windSpeed: `${windSpeed.toFixed(2)} ${speedUnit}`,
            details,
            key: index,
          };
        }
      }
    }
  );

  const dynamicColumns = useCallback(() => {
    const weatherData = Array.from(weatherValues.values());
    if (weatherValues.size === 0) {
      return;
    } else {
      //I  want to use includes but I don't know how
      //to get into the object of the array, includes seems
      //to just compare raw values easily, you can use .call()
      //but not entirely sure how it works yet.
    }
  }, [weatherValues]);

  dynamicColumns();

  const columns = Array.from(weatherTableColumns.values());

  return (
    <div className={darkMode ? 'dark-weather-table' : 'light-weather-table'}>
      <Table dataSource={datasource} columns={columns} />
      {weatherValues.size === 0 ? (
        ''
      ) : (
        <WeatherDetailsModal title={`Weather Details`}>
          {weatherDetails(weatherDetailsKey, units, weatherValues)}
        </WeatherDetailsModal>
      )}
    </div>
  );
};

export default WeatherTable;
