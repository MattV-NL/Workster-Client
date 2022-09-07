import { createContext, useCallback, useState, useContext } from 'react';
import { DateTime } from 'luxon';
import { GEOLOCATION_KEY, LATITUDE_KEY, LONGITUDE_KEY } from '../constants';
import { PositionContext } from './PositionContext';
import { createWeatherValues, replaceDate } from '../restAPI/WeatherDataInit';
import {
  error,
  options,
  getCoordinates,
  sendCoordinatesGeolocate,
  sendCoordinatesManual,
  manualLocationInput,
} from '../restAPI/handleLocation';
import { AuthenticationContext } from './AuthenticationContext';

export const WeatherDataContext = createContext();

const WeatherDataContextProvider = ({ children }) => {
  const {
    positionData,
    setGeoLocate,
    setLatitude,
    setLongitude,
    setSaveLocation,
  } = useContext(PositionContext);
  const { authStatus } = useContext(AuthenticationContext);
  const [weatherValues, setWeatherValues] = useState(new Map());
  const [weatherChartValues, setWeatherChartValues] =
    useState(createWeatherValues);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isWeatherModalVisible, setIsWeatherModalVisible] = useState(false);
  const [isWeatherDetailsVisible, setIsWeatherDetailsVisible] = useState(false);

  const storeWeatherData = useCallback(
    ({ daily }) => {
      setWeatherValues(
        new Map(daily.map((day) => [replaceDate(day.dt * 1000), day]))
      );
    },
    [setWeatherValues]
  );

  const setupWeatherTable = useCallback(() => {
    const nextWeatherArray = Array.from(weatherValues.values()).map(
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
  }, [weatherValues, setWeatherChartValues]);

  const success = useCallback(
    async (pos) => {
      storeWeatherData(await getCoordinates(pos));
      setupWeatherTable();
      setGeoLocate(false);
      setSaveLocation(false);
    },
    [setupWeatherTable, setGeoLocate, setSaveLocation, storeWeatherData]
  );

  const sendLocation = useCallback(async () => {
    if (positionData[GEOLOCATION_KEY].value) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          sendCoordinatesGeolocate(pos, authStatus.user_id);
        },
        error,
        options
      );
    } else {
      sendCoordinatesManual(
        positionData[LATITUDE_KEY].value,
        positionData[LONGITUDE_KEY].value,
        authStatus.user_id
      );
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
        setupWeatherTable();
        setLatitude('');
        setLongitude('');
        setSaveLocation(false);
      }
    } else {
      setIsWeatherModalVisible(true);
    }
  }, [
    positionData,
    setupWeatherTable,
    success,
    setLatitude,
    setLongitude,
    setIsWeatherModalVisible,
    setSaveLocation,
    storeWeatherData,
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
