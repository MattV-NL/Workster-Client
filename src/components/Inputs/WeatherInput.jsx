import './inputs.scss';
import { useState, useContext } from 'react';
import { FirstContext } from '../../contexts/FirstContext';

const WeatherInput = () => {
  const { weatherValues, inputWeatherValue } = useContext(FirstContext);

  const [weekday, setWeekday] = useState('');
  const [precip, setPrecip] = useState('');
  const [wind, setWind] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    inputWeatherValue(weekday, precip, wind);
    setWeekday('');
    setPrecip('');
    setWind('');
    console.log(weatherValues);
  }

  return (
    <form className='user-inputs' onSubmit={handleSubmit}>
      <input type="text" value={weekday} className='weekday-input' placeholder='Day of the week' required onChange={(e) => setWeekday(e.target.value)}/>
      <input type="number" value={precip} className='precip-input' placeholder='Precipitation amount' required onChange={(e) => setPrecip(parseInt(e.target.value))} />
      <input type="number" value={wind} className='wind-input' placeholder='Wind Speed' required onChange={(e) => setWind(parseInt(e.target.value))} />
      <div className='submit-button-div'>
        <button className='submit-button'>Submit</button>
      </div>
    </form>
  )
}

export default WeatherInput
