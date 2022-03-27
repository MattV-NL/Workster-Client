import '../Tables/tables.scss';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';

const WeatherInput = () => {
  
  const { weekday, 
          precip, 
          wind, 
          submitWeekday, 
          submitPrecip, 
          submitWind
        } = useContext(InputContext);

  return (
    <table className='table'>
      <tbody>
        <tr>
          <td>
            <input 
              type="date" 
              value={weekday} 
              className='weekday-input'  
              required 
              onChange={submitWeekday}
            />
          </td>
          <td>
            <input 
              type="number" 
              value={precip || ""} 
              className='precip-input' 
              placeholder='Precipitation' 
              required 
              onChange={submitPrecip} 
            />
          </td>
          <td>
            <input 
              type="number" 
              value={wind || ""} 
              className='wind-input' 
              placeholder='Wind Speed' 
              required 
              onChange={submitWind} 
            />
          </td>  
        </tr>
      </tbody>
    </table>
  )
}

export default WeatherInput
