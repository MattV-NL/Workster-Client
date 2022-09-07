import { useContext, useCallback, useState } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import './tables.scss';
import { Table } from 'antd';
import { weatherTableColumns } from '../../constants';
import WeatherDetailsModal from '../Modals/WeatherDetailsModal';
import { DateTime } from 'luxon';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const WeatherTable = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { weatherValues, setIsWeatherDetailsVisible } =
    useContext(WeatherDataContext);
  const weatherValuesKeys = weatherValues.keys();
  const [weatherDetailsKey, setWeatherDetailsKey] = useState('');

  const columns = Array.from(weatherTableColumns.values());
  const datasource = Array.from(weatherValues.values()).map(
    ({ dt, pop, wind_speed }, index) => {
      let detailsKey = weatherValuesKeys.next().value;
      let date = new Date(dt * 1000).toDateString();
      let precip = pop * 100;
      let windSpeed = wind_speed * 3.6;
      let details = (
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
      return {
        date,
        precip: precip.toFixed(2),
        windSpeed: windSpeed.toFixed(2),
        details,
        key: index,
      };
    }
  );

  const weatherDetails = useCallback(
    (key) => {
      if (!key) {
        return 'no details yet, please enter location information to retrieve the weather details';
      } else {
        const weatherData = weatherValues.get(parseInt(key));
        const getTime = (millis) =>
          new DateTime.fromMillis(millis * 1000).toLocaleString(
            DateTime.TIME_SIMPLE
          );
        const getWindSpeed = (wind) => parseFloat((wind * 3.6).toFixed(2));

        return (
          <ul>
            <li>Sunrise: {getTime(weatherData.sunrise)}</li>
            <li>Sunset: {getTime(weatherData.sunset)}</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Dewpoint: {weatherData.dew_point}&#176;C</li>
            <li>Morning Temperature: {weatherData.feels_like.morn}&#176;C</li>
            <li>Day Temperature: {weatherData.feels_like.day}&#176;C</li>
            <li>Evening Temperature: {weatherData.feels_like.eve}&#176;C</li>
            <li>Night Temperature: {weatherData.feels_like.night}&#176;C</li>
            <li>Wind Direction: {weatherData.wind_deg}&#176;</li>
            <li>Wind Speed: {getWindSpeed(weatherData.wind_speed)}km/hr</li>
          </ul>
        );
      }
    },
    [weatherValues]
  );

  return (
    <div className={darkMode ? 'dark-weather-table' : 'light-weather-table'}>
      <Table dataSource={datasource} columns={columns} />
      <WeatherDetailsModal title={`Weather Details`}>
        {weatherDetails(weatherDetailsKey)}
      </WeatherDetailsModal>
    </div>
  );
};

export default WeatherTable;
