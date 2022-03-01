import { useContext } from 'react';
import { FirstContext } from '../../contexts/FirstContext';
import './FirstTable.css';

const RainfallTable = () => {

  const {weatherValue} = useContext(FirstContext);

  return (
    <div className="table-chart">
      <table>
          <tbody>
            <tr>
              <th>Day of the Week</th>
              <th>Rainfall Amount</th>
            </tr>
              <tr>
                  <td>Monday</td>
                  <td>{weatherValue[0].Precipitation}</td>
              </tr>
              <tr>
                  <td>Tuesday</td>
                  <td>{weatherValue[1].Precipitation}</td>
              </tr>
              <tr>
                  <td>Wednesday</td>
                  <td>{weatherValue[2].Precipitation}</td>
              </tr>
              <tr>
                  <td>Thursday</td>
                  <td>{weatherValue[3].Precipitation}</td>
              </tr>
              <tr>
                  <td>Friday</td>
                  <td>{weatherValue[4].Precipitation}</td>
              </tr>
              <tr>
                  <td>Saturday</td>
                  <td>{weatherValue[5].Precipitation}</td>
              </tr>
              <tr>
                  <td>Sunday</td>
                  <td>{weatherValue[6].Precipitation}</td>
              </tr>
          </tbody>
      </table>
    </div>
  )
}

export default RainfallTable
