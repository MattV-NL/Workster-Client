import { createContext } from 'react';

export const WeatherDataContext2 = createContext();

const fetchWeather = () => {
  let lon = -52.7314;
  let lat = 47.6666;
  let key = 'c4aa91c492141719621c2f09ce2559a3';
  let lang = 'en';
  let units = 'metric';
  let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;

  fetch(url)
    .then((resp) => {
      if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })
    .then((data) => {
      showWeather(data);
    })
    .catch(console.err);
};

const showWeather = (data) => {
  console.log(data);
};

fetchWeather();

const something = '';
const WeatherDataContextProvider2 = ({ children }) => {
  return (
    <WeatherDataContext2.Provider value={something}>
      {children}
    </WeatherDataContext2.Provider>
  );
};

export default WeatherDataContextProvider2;
