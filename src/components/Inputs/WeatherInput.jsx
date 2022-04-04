import '../Tables/tables.scss';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';
import Input from './Input';

const WeatherInput = () => {
  
  const { date, 
          precip, 
          wind, 
          submitDate, 
          submitPrecip, 
          submitWind
        } = useContext(InputContext);

  return (
    <table className='table'>
      <tfoot>
        <tr>
          <td>
            <Input 
              type="date"
              value={date}
              isRequired={true}
              handleChange={submitDate}
              />
          </td>
          <td>
            <Input 
              type="number" 
              value={precip || ""} 
              placeholder='Precipitation'
              isRequired={true} 
              handleChange={submitPrecip} 
            />
          </td>
          <td>
            <Input 
              type="number" 
              value={wind || ""} 
              placeholder='Wind Speed' 
              isRequired 
              handleChange={submitWind} 
            />
          </td>  
        </tr>
      </tfoot>
    </table>
  )
}

export default WeatherInput
