import { createContext, useState, useCallback } from 'react';

export const WeatherDataContext2 = createContext();

let lon = -52.7314;
let lat = 47.6666;
let key = 'c4aa91c492141719621c2f09ce2559a3';
let lang = 'en';
let units = 'metric';
let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;

// const fetchWeather = () => {
//   fetch(url)
//     .then((resp) => {
//       if (!resp.ok) throw new Error(resp.statusText);
//       return resp.json();
//     })
//     .then((data) => {
//       storeWeatherData(data);
//     })
//     .catch(console.err);
// };

// const storeWeatherData = ({ list }) => {
//   const weatherDataMap = new Map(
//     list
//       .map(({ dt, wind, pop }) => {
//         let date = new Date(dt * 1000).toDateString();
//         let precip = pop * 100;
//         let windSpeed = wind.speed * 3.6;
//         return {
//           date,
//           precip,
//           windSpeed,
//         };
//       })
//       .map((list) => [list.date, list])
//   );
// };

const WeatherDataContextProvider2 = ({ children }) => {
  const [weatherValues2, setWeatherValues2] = useState();

  const fetchWeather = () => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        storeWeatherData(data);
      })
      .catch(console.err);
  };

  const storeWeatherData = ({ list }) => {
    const weatherDataMap = new Map(
      list
        .map(({ dt, wind, pop }) => {
          let date = new Date(dt * 1000).toDateString();
          let precip = pop * 100;
          let windSpeed = wind.speed * 3.6;
          return {
            date,
            precip,
            windSpeed,
          };
        })
        .map((list) => [list.date, list])
    );

    setWeatherValues2(weatherDataMap);
  };

  const initWeatherValues = useCallback(fetchWeather);

  console.log(weatherValues2);

  return (
    <WeatherDataContext2.Provider
      value={{ weatherValues2, fetchWeather, initWeatherValues }}
    >
      {children}
    </WeatherDataContext2.Provider>
  );
};

export default WeatherDataContextProvider2;
