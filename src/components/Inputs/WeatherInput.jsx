import './inputs.scss';
import { useState, useContext } from 'react';
import { FirstContext } from '../../contexts/FirstContext';

const WeatherInput = () => {
  const { weatherValues, inputWeatherValue } = useContext(FirstContext);

  const [weekday, setWeekday] = useState('');
  const [precip, setPrecip] = useState(null);
  const [wind, setWind] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    inputWeatherValue(weekday, precip, wind);
    setWeekday('');
    setPrecip(null);
    setWind(null);
  }

  const takeWeekdayInput = (e) => setWeekday(e.target.value);

  const takePrecipInput = (e) => setPrecip(parseInt(e.target.value));

  const takeWindInput = (e) => setWind(parseInt(e.target.value));

  return (
    <form className='user-inputs' onSubmit={handleSubmit}>
      <input 
        type="date" 
        value={weekday} 
        className='weekday-input' 
        placeholder='Day of the week' 
        required 
        onChange={takeWeekdayInput}
      />
      <input 
        type="number" 
        value={precip || ""} 
        className='precip-input' 
        placeholder='Precipitation amount' 
        required 
        onChange={takePrecipInput} 
      />
      <input 
        type="number" 
        value={wind || ""} 
        className='wind-input' 
        placeholder='Wind Speed' 
        required 
        onChange={takeWindInput} 
      />
      <div className='submit-button-div'>
        <button className='submit-button'>Submit</button>
      </div>
    </form>
  )
}

export default WeatherInput
