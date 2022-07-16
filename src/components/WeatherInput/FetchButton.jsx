import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Button from '../Inputs/Button';

const FetchButton = () => {
  const { fetchWeather, setWeather, setupChart } =
    useContext(WeatherDataContext);

  // working on getting position to server
  const lat = 47.65;
  const lon = -52.74;
  const posData = { lat, lon };
  const URL = 'https://localhost:8080';
  const options = {
    method: 'POST',
    body: JSON.stringify(posData),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const sendCoords = async () => {
    const response = await fetch('/api', options);
    const position = await response.json();
    console.log(position);
  };
  // end of new

  const handleClick = () => {
    // setWeather();
    // setupChart();
    fetchWeather().catch((err) => console.log(err));
  };

  return (
    <div>
      <Button onClick={sendCoords}>Send Position</Button>
      <Button onClick={handleClick}>Get Weather Info</Button>
    </div>
  );
};

export default FetchButton;
