import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import WeatherInput from '../Inputs/WeatherInput';
import './tables.scss';
import WeatherTableHeader from './WeatherTableHeader';

const RainfallTable = () => {

  const {weatherValues} = useContext(DataContext);

  return (
    <>
      <WeatherTableHeader />
        <div className="weather-table">
          <table>
            <tbody>
              {weatherValues.map(({ date, Precipitation, WindSpeed }) => (
                  <tr key = {`${date}+${Precipitation}`}>
                    <td>{date}</td>
                    <td>{Precipitation}</td>
                    <td>{WindSpeed}</td>
                  </tr>
                  ))}            
            </tbody>
          </table>
        </div>
      <WeatherInput />
    </>
  );
}

export default RainfallTable
