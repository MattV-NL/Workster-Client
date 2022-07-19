import { useContext, useCallback } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { SERVER_URL } from '../../constants';
import Button from '../Inputs/Button';

const FetchButton = () => {
  const { fetchWeather, setWeather, setupChart } =
    useContext(WeatherDataContext);

  // working on getting position to server
  let userLoc = {
    lat: '',
    lon: '',
  };

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
    userLoc.lat = crd.latitude;
    userLoc.lon = crd.longitude;

    const optionsPOST = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userLoc),
    };

    const response = await fetch(SERVER_URL.position, optionsPOST);
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
