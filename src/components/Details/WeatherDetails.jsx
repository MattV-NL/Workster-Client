import './details.scss';
import { useParams } from 'react-router-dom';
import { useContext, useCallback } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { DateTime } from 'luxon';

const WeatherDetails = () => {
  const { id } = useParams();
  const { weatherDataMap, weatherChartValues } = useContext(WeatherDataContext);
  const weatherData = weatherDataMap.get(parseInt(id));

  const getTime = useCallback(
    (millis) =>
      new DateTime.fromMillis(millis * 1000).toLocaleString(
        DateTime.TIME_SIMPLE
      ),
    []
  );

  const getWindSpeed = useCallback(
    (wind) => parseFloat((wind * 3.6).toFixed(2)),
    []
  );

  return (
    <div className='details-container'>
      <h3>Weather Details for {weatherChartValues.get(parseInt(id)).date}</h3>
      <div className='details-content'>
        <p>The humidity is {weatherData.humidity}%</p>
        <p>The sunrise is {getTime(weatherData.sunrise)}</p>
        <p>The sunset is {getTime(weatherData.sunset)}</p>
        <p>
          The Temperature for the morning is {weatherData.feels_like.morn}
          &#176;C
        </p>
        <p>
          The Temperature for the daytime is {weatherData.feels_like.day}&#176;C
        </p>
        <p>
          The Temperature for the evening is {weatherData.feels_like.eve}&#176;C
        </p>
        <p>
          The Temperature for the night is {weatherData.feels_like.night}&#176;C
        </p>
        <p>The wind direction is {weatherData.wind_deg}&#176;</p>
        <p>
          The sustained wind speed is {getWindSpeed(weatherData.wind_speed)}km/h
        </p>
        <p>The wind gust is {getWindSpeed(weatherData.wind_gust)}km/h</p>
        <p>The dew point is {weatherData.dew_point}&#176;C</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
