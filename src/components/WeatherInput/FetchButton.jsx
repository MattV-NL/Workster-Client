import { useContext, useCallback } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { SERVER_URL } from '../../constants';
import Button from '../Inputs/Button';

const FetchButton = () => {
  const { fetchWeather, setWeather, setupChart } =
    useContext(WeatherDataContext);

  // working on getting position to server
  let lat, lon;

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const success = async (pos) => {
    const crd = pos.coords;
    lat = crd.latitude;
    lon = crd.longitude;
    console.log(lat, lon);

    const apiUrl = `${SERVER_URL.weather}${lat},${lon}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  };

  const getLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [success]);

  const handleClick2 = () => {
    getLocation();
  };
  // end of new

  const handleClick = () => {
    // setWeather();
    // setupChart();
    fetchWeather().catch((err) => console.log(err));
  };

  return (
    <div>
      <Button onClick={handleClick2}>Send Position</Button>
      <Button onClick={handleClick}>Get Weather Info</Button>
    </div>
  );
};

export default FetchButton;
