import { useContext } from 'react';
import { FirstContext } from '../../contexts/FirstContext';
import './FirstTable.css';

const FirstTable = () => {
  //const [precipValue, setPrecipValue] = useContext(FirstContext);

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
                  <td>20</td>
              </tr>
              <tr>
                  <td>Tuesday</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Wednesday</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Thursday</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Friday</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Saturday</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Sunday</td>
                  <td></td>
              </tr>
          </tbody>
      </table>
    </div>
  )
}

export default FirstTable
