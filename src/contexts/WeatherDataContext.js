import { createContext, useCallback, useState, useContext } from 'react';
import { DateTime } from 'luxon';
import {
  GEOLOCATION_KEY,
  LATITUDE_KEY,
  LONGITUDE_KEY,
  SERVER_URL,
} from '../constants';
import { PositionContext } from './PositionContext';

export const WeatherDataContext = createContext();
let lat, lon, weatherDataMap;

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const createDate = () => {
  return new DateTime.utc();
};

const createWeatherValues = () =>
  new Map(
    Array(7)
      .fill(createDate())
      .map((date, days) => date.plus({ days }))
      .map((date) => ({
        date: date.toISODate(),
        precip: 0,
        wind: 0,
      }))
      .map((data) => [parseInt(data.date.replace(/-/g, '')), data])
  );

const replaceDate = (time) =>
  parseInt(new DateTime.fromMillis(time).toISODate().replace(/-/g, ''));

const storeWeatherData = ({ daily }) => {
  weatherDataMap = new Map(
    daily.map((day) => [replaceDate(day.dt * 1000), day])
  );
};

const WeatherDataContextProvider = ({ children }) => {
  const {
    positionData,
    setGeoLocate,
    setLatitude,
    setLongitude,
    setSaveLocation,
  } = useContext(PositionContext);
  const [weatherValues, setWeatherValues] = useState();
  const [weatherChartValues, setWeatherChartValues] =
    useState(createWeatherValues);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isWeatherModalVisible, setIsWeatherModalVisible] = useState(false);
  const [isWeatherDetailsVisible, setIsWeatherDetailsVisible] = useState(false);

  const setWeather = useCallback(() => {
    setWeatherValues(weatherDataMap);
    const nextWeatherArray = Array.from(weatherDataMap.values()).map(
      ({ dt, pop, wind_speed }) => {
        let date = new DateTime.fromMillis(dt * 1000).toISODate();
        let precip = pop * 100;
        let wind = wind_speed * 3.6;
        return {
          date,
          precip: parseFloat(precip.toFixed(2)),
          wind: parseFloat(wind.toFixed(2)),
        };
      }
    );

    const nextWeatherMap = new Map(
      nextWeatherArray.map((data) => [
        parseInt(data.date.replace(/-/g, '')),
        data,
      ])
    );
    setWeatherChartValues(nextWeatherMap);
  }, [setWeatherValues, setWeatherChartValues]);

  const success = useCallback(
    async (pos) => {
      const crd = pos.coords;
      lat = crd.latitude;
      lon = crd.longitude;
      const apiUrl = `${SERVER_URL.weather}${lat},${lon}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      storeWeatherData(data);
      setWeather();
      setGeoLocate(false);
      setSaveLocation(false);
    },
    [setWeather, setGeoLocate, setSaveLocation]
  );

  const sendLocation = useCallback(async () => {
    const response = await fetch(SERVER_URL.authCheck, {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });
    const data = await response.json();
    console.log(data);

    if (positionData[GEOLOCATION_KEY].value) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const crd = pos.coords;
          lat = crd.latitude;
          lon = crd.longitude;
          const coordsJSON = {
            user_id: data.user_id,
            lat,
            lon,
          };
          const sendResponse = await fetch(SERVER_URL.saveLocation, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(coordsJSON),
          });
          const sendData = sendResponse.json();
          console.log(sendData, 'geolocate');
        },
        error,
        options
      );
    } else {
      lat = positionData[LATITUDE_KEY].value;
      lon = positionData[LONGITUDE_KEY].value;
      const coords = {
        lat,
        lon,
      };
      const sendResponse = await fetch(SERVER_URL.saveLocation, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(coords),
      });
      const sendData = sendResponse.json();
      console.log(sendData, 'manual input');
    }
  }, [positionData]);

  const getLocation = useCallback(async () => {
    if (
      positionData[GEOLOCATION_KEY].value ||
      (positionData[LATITUDE_KEY].value && positionData[LONGITUDE_KEY].value)
    ) {
      if (positionData[GEOLOCATION_KEY].value) {
        navigator.geolocation.getCurrentPosition(success, error, options);
      } else {
        const crd = {
          latitude: positionData[LATITUDE_KEY].value,
          longitude: positionData[LONGITUDE_KEY].value,
        };
        lat = crd.latitude;
        lon = crd.longitude;
        const apiUrl = `${SERVER_URL.weather}${lat},${lon}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        storeWeatherData(data);
        setWeather();
        setLatitude('');
        setLongitude('');
        setSaveLocation(false);
      }
    } else {
      setIsWeatherModalVisible(true);
    }
  }, [
    positionData,
    setWeather,
    success,
    setLatitude,
    setLongitude,
    setIsWeatherModalVisible,
    setSaveLocation,
  ]);

  const clearWeatherValues = useCallback(() => {
    setWeatherChartValues(createWeatherValues());
    setWeatherValues('');
    setGeoLocate(false);
    setLatitude('');
    setLongitude('');
  }, [setGeoLocate, setLatitude, setLongitude]);

  return (
    <WeatherDataContext.Provider
      value={{
        weatherDataMap,
        sendLocation,
        getLocation,
        weatherValues,
        weatherChartValues,
        isModalVisible,
        setIsModalVisible,
        isWeatherModalVisible,
        setIsWeatherModalVisible,
        isWeatherDetailsVisible,
        setIsWeatherDetailsVisible,
        clearWeatherValues,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContextProvider;
