import { useCallback, useContext, useState } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import './tables.scss';
import { Table } from 'antd';
import { weatherTableColumns } from '../../constants';
import WeatherDetailsModal from '../Modals/WeatherDetailsModal';
import { UserSettingsContext } from '../../contexts/UserSettingsContext';
import { weatherDetails } from '../../restAPI/weatherDetails';
import ResetButton from '../WorkInput/ResetButton';
import '../Inputs/inputs.scss';
import { replaceDate } from '../../restAPI/replaceDate';
import { ConflictContext } from '../../contexts/ConflictContext';

const WeatherTable = () => {
  const { darkMode, units } = useContext(UserSettingsContext);
  const { weatherValues, setIsWeatherDetailsVisible } =
    useContext(WeatherDataContext);
  const { isConflict2 } = useContext(ConflictContext);
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
            className='more-details'
            onClick={() => {
              setWeatherDetailsKey(detailsKey);
              setIsWeatherDetailsVisible(true);
            }}
          >
            More Details...
          </div>
        </>
      );

      const dateKey = replaceDate(dt * 1000);
      const isThereConflict = Object(isConflict2.get(dateKey));

      return {
        date,
        rain: `${rain || 0}mm`,
        snow: `${snow || 0}cm`,
        windSpeed: `${windSpeed.toFixed(2)} ${speedUnit}`,
        details,
        key: index,
        conflict: isThereConflict.conflict,
      };
    }
  );

  const searchWeatherObjectsForSnow = useCallback(() => {
    const weatherData = Array.from(weatherValues.values());
    const weatherValuesHasSnowArray = weatherData.map((day) => {
      return Object.hasOwn(day, 'snow');
    });
    return weatherValuesHasSnowArray;
  }, [weatherValues]);

  const dynamicColumns = useCallback(() => {
    if (searchWeatherObjectsForSnow().includes(true)) {
      return Array.from(weatherTableColumns.values());
    } else {
      const newWeatherTableColumns = new Map(weatherTableColumns);
      newWeatherTableColumns.delete('snow');
      return Array.from(newWeatherTableColumns.values());
    }
  }, [searchWeatherObjectsForSnow]);

  const dynamicRow = useCallback(() => {
    const rowState = datasource.forEach((row) => {
      return row.conflict;
    });
    if (rowState) {
      console.log('in conflict');
      return 'row-has-conflict';
    } else {
      return 'row-has-no-conflict';
    }
  }, [weatherValues]);

  return (
    <div className={darkMode ? 'dark-table' : 'light-table'}>
      <Table
        dataSource={datasource}
        columns={dynamicColumns()}
        rowClassName={dynamicRow()}
      />
      {weatherValues.size === 0 ? (
        ''
      ) : (
        <WeatherDetailsModal title={`Weather Details`}>
          {weatherDetails(weatherDetailsKey, units, weatherValues)}
        </WeatherDetailsModal>
      )}
      <div className='form-button'>
        <ResetButton />
      </div>
    </div>
  );
};

export default WeatherTable;
