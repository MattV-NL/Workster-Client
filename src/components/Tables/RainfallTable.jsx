import { useContext } from 'react';
import { FirstContext } from '../../contexts/FirstContext';
import './tables.scss';

const RainfallTable = () => {

  const {weatherValues} = useContext(FirstContext);

  return (
      <table className="table">
          <tbody>
            <tr>
              <th>Day of the Week</th>
              <th>Rainfall Amount</th>
            </tr>
              <tr>
                  <td>Monday</td>
                  <td>{weatherValues[0].Precipitation}</td>
              </tr>
              <tr>
                  <td>Tuesday</td>
                  <td>{weatherValues[1].Precipitation}</td>
              </tr>
              <tr>
                  <td>Wednesday</td>
                  <td>{weatherValues[2].Precipitation}</td>
              </tr>
              <tr>
                  <td>Thursday</td>
                  <td>{weatherValues[3].Precipitation}</td>
              </tr>
              <tr>
                  <td>Friday</td>
                  <td>{weatherValues[4].Precipitation}</td>
              </tr>
              <tr>
                  <td>Saturday</td>
                  <td>{weatherValues[5].Precipitation}</td>
              </tr>
              <tr>
                  <td>Sunday</td>
                  <td>{weatherValues[6].Precipitation}</td>
              </tr>
          </tbody>
      </table>
  );
}

export default RainfallTable
