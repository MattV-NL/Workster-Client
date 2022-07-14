import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Button from '../Inputs/Button';

const FetchButton = () => {
  const { setWeather, setupChart } = useContext(WeatherDataContext);

  // working on getting position to server
  const sendCoords = () => {
    const lat = 47.65;
    const lon = -52.74;
    const posData = { lat, lon };
    const options = {
      method: 'POST',
      body: JSON.stringify(posData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch('/client', options);
    console.log(posData);
  };
  // end of new

  const handleClick = () => {
    setWeather();
    setupChart();
  };

  return (
    <div>
      <Button onClick={sendCoords}>Send Position</Button>
      <Button onClick={handleClick}>Get Weather Info</Button>
    </div>
  );
};

export default FetchButton;
