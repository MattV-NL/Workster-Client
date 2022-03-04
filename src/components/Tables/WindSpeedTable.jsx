import { useContext } from 'react';
import { FirstContext } from '../../contexts/FirstContext';
import './tables.scss';

const WindSpeedTable = () => {

  const {weatherValues} = useContext(FirstContext);

  return (
    <table className="table">
          <tbody>
            <tr>
              <th>Day of the Week</th>
              <th>Wind Speed</th>
            </tr>
              <tr>
                  <td>Monday</td>
                  <td>{weatherValues[0].WindSpeed}</td>
              </tr>
              <tr>
                  <td>Tuesday</td>
                  <td>{weatherValues[1].WindSpeed}</td>
              </tr>
              <tr>
                  <td>Wednesday</td>
                  <td>{weatherValues[2].WindSpeed}</td>
              </tr>
              <tr>
                  <td>Thursday</td>
                  <td>{weatherValues[3].WindSpeed}</td>
              </tr>
              <tr>
                  <td>Friday</td>
                  <td>{weatherValues[4].WindSpeed}</td>
              </tr>
              <tr>
                  <td>Saturday</td>
                  <td>{weatherValues[5].WindSpeed}</td>
              </tr>
              <tr>
                  <td>Sunday</td>
                  <td>{weatherValues[6].WindSpeed}</td>
              </tr>
          </tbody>
      </table>
  );
}

export default WindSpeedTable;