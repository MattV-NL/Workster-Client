import { createContext, useCallback, useState, useContext } from 'react';
import { DateTime } from 'luxon';
import {
  GEOLOCATION_KEY,
  LATITUDE_KEY,
  LONGITUDE_KEY,
  SERVER_URL,
} from '../constants';
import { PositionContext } from './PositionContext';
import { manualLocationInput } from '../restAPI/location';
import {
  createWeatherValues,
  replaceDate,
} from '../utilityFunc/WeatherDataInit';
import { error, options } from '../utilityFunc/geolocation';
import { AuthenticationContext } from './AuthenticationContext';

export const WeatherDataContext = createContext();
let lat, lon, weatherDataMap;

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
  const { authStatus } = useContext(AuthenticationContext);
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
      storeWeatherData(await response.json());
      setWeather();
      setGeoLocate(false);
      setSaveLocation(false);
    },
    [setWeather, setGeoLocate, setSaveLocation]
  );

  const sendLocation = useCallback(async () => {
    if (positionData[GEOLOCATION_KEY].value) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const crd = pos.coords;
          lat = crd.latitude.toPrecision(6);
          lon = crd.longitude.toPrecision(6);
          const coordsJSON = {
            user_id: authStatus.user_id,
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
      lat = parseFloat(positionData[LATITUDE_KEY].value);
      lon = parseFloat(positionData[LONGITUDE_KEY].value);

      const coordsJSON = {
        user_id: authStatus.user_id,
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
      console.log(sendData, 'manual input');
    }
  }, [positionData, authStatus.user_id]);

  const getLocation = useCallback(async () => {
    if (
      positionData[GEOLOCATION_KEY].value ||
      (positionData[LATITUDE_KEY].value && positionData[LONGITUDE_KEY].value)
    ) {
      if (positionData[GEOLOCATION_KEY].value) {
        navigator.geolocation.getCurrentPosition(success, error, options);
      } else {
        storeWeatherData(
          await manualLocationInput(
            positionData[LATITUDE_KEY].value,
            positionData[LONGITUDE_KEY].value
          )
        );
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
