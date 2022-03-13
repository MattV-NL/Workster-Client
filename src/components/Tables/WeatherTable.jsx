import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import WeatherInput from '../Inputs/WeatherInput';
import './tables.scss';

const RainfallTable = () => {

  const {weatherValues} = useContext(DataContext);

  return (
      <table className="table">
        <tbody>
          <tr>
            <th>Day of the Week</th>
            <th>Rainfall Amount</th>
            <th>Wind Speed</th>
          </tr>
          {weatherValues.map(({ date, Precipitation, WindSpeed }) => (
              <tr key = {`${date} + ${Precipitation}`}>
                <td>{date}</td>
                <td>{Precipitation}</td>
                <td>{WindSpeed}</td>
              </tr>
              ))}
          <WeatherInput />  
        </tbody>
      </table>
  );
}

export default RainfallTable
