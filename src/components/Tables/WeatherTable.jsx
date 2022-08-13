import { useContext, useMemo, useCallback } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import './tables.scss';
import { Table } from 'antd';
import { weatherTableColumns } from '../../constants';
import WeatherDetailsModal from '../Modals/WeatherDetailsModal';
import { DateTime } from 'luxon';

let n = 1;
const WeatherTable = () => {
  const { weatherValues, setIsWeatherDetailsVisible } =
    useContext(WeatherDataContext);
  const weatherTableMap = useMemo(
    () => new Map(weatherValues),
    [weatherValues]
  );
  const weatherValuesKeys = weatherTableMap.keys();

  const weatherDetails = useCallback(
    (key) => {
      const weatherData = weatherTableMap.get(parseInt(key));
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
    },
    [weatherTableMap]
  );

  const columns = Array.from(weatherTableColumns.values());
  const datasource = Array.from(weatherTableMap.values()).map(
    ({ dt, pop, wind_speed }) => {
      let date = new Date(dt * 1000).toDateString();
      let precip = pop * 100;
      let windSpeed = wind_speed * 3.6;
      let details = (
        <>
          <div
            onClick={() => {
              setIsWeatherDetailsVisible(true);
            }}
          >
            More Details...
          </div>
          <WeatherDetailsModal title={`Weather Details`}>
            {weatherDetails(weatherValuesKeys.next().value)}
          </WeatherDetailsModal>
        </>
      );

      return {
        date,
        precip: precip.toFixed(2),
        windSpeed: windSpeed.toFixed(2),
        details,
      };
    }
  );

  datasource.map((item) => (item.key = n++));

  return (
    <div className='table'>
      <Table dataSource={datasource} columns={columns} />
    </div>
  );
};

export default WeatherTable;
