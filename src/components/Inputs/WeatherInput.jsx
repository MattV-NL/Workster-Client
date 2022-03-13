import './inputs.scss';
import { useState, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

const WeatherInput = () => {
  const { inputWeatherValue } = useContext(DataContext);

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
    <>
      <tr>
        <td>
          <input 
            type="date" 
            value={weekday} 
            className='weekday-input'  
            required 
            onChange={takeWeekdayInput}
          />
        </td>
        <td>
          <input 
            type="number" 
            value={precip || ""} 
            className='precip-input' 
            placeholder='Precipitation amount' 
            required 
            onChange={takePrecipInput} 
          />
        </td>
        <td>
          <input 
            type="number" 
            value={wind || ""} 
            className='wind-input' 
            placeholder='Wind Speed' 
            required 
            onChange={takeWindInput} 
          />
        </td>  
      </tr>
      <tr className='submit-button-div'>
        <td className='empty-td'></td>
        <td className='submit-button' onClick={handleSubmit}>Submit</td>
        <td className='empty-td'></td>
      </tr>
    </>
  )
}

export default WeatherInput
