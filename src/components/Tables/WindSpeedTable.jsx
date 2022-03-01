import { useContext } from 'react';
import { FirstContext } from '../../contexts/FirstContext';
import './tables.css';

const WindSpeedTable = () => {

  const {weatherValue} = useContext(FirstContext);

  return (
    <div className="wind-rain-table">
      <table>
          <tbody>
            <tr>
              <th>Day of the Week</th>
              <th>Wind Speed</th>
            </tr>
              <tr>
                  <td>Monday</td>
                  <td>{weatherValue[0].WindSpeed}</td>
              </tr>
              <tr>
                  <td>Tuesday</td>
                  <td>{weatherValue[1].WindSpeed}</td>
              </tr>
              <tr>
                  <td>Wednesday</td>
                  <td>{weatherValue[2].WindSpeed}</td>
              </tr>
              <tr>
                  <td>Thursday</td>
                  <td>{weatherValue[3].WindSpeed}</td>
              </tr>
              <tr>
                  <td>Friday</td>
                  <td>{weatherValue[4].WindSpeed}</td>
              </tr>
              <tr>
                  <td>Saturday</td>
                  <td>{weatherValue[5].WindSpeed}</td>
              </tr>
              <tr>
                  <td>Sunday</td>
                  <td>{weatherValue[6].WindSpeed}</td>
              </tr>
          </tbody>
      </table>
    </div>
  );
}

export default WindSpeedTable;