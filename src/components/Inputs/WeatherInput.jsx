import './inputs.scss';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';

const WeatherInput = () => {
  
  const { weekday, 
          precip, 
          wind, 
          takeWeekdayInput, 
          takePrecipInput, 
          takeWindInput
        } = useContext(InputContext);

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
            placeholder='Precipitation' 
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
    </>
  )
}

export default WeatherInput
