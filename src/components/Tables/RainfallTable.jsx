import { useContext } from 'react';
import { FirstContext } from '../../contexts/FirstContext';
import './tables.scss';

const RainfallTable = () => {

  const {weatherValues} = useContext(FirstContext);

  const weekdays = weatherValues.map(weekday => weekday.name)
  const precipValues = weatherValues.map(precipValue => precipValue.Precipitation)

  return (
      <table className="table">
          <tbody>
            <tr>
              <th>Day of the Week</th>
              <th>Rainfall Amount</th>
            </tr>
              <tr>
                  <td>{weekdays[0]}</td>
                  <td>{precipValues[0]}</td>
              </tr>
              <tr>
                  <td>{weekdays[1]}</td>
                  <td>{precipValues[1]}</td>
              </tr>
              <tr>
                  <td>{weekdays[2]}</td>
                  <td>{precipValues[2]}</td>
              </tr>
              <tr>
                  <td>{weekdays[3]}</td>
                  <td>{precipValues[3]}</td>
              </tr>
              <tr>
                  <td>{weekdays[4]}</td>
                  <td>{precipValues[4]}</td>
              </tr>
              <tr>
                  <td>{weekdays[5]}</td>
                  <td>{precipValues[5]}</td>
              </tr>
              <tr>
                  <td>{weekdays[6]}</td>
                  <td>{precipValues[6]}</td>
              </tr>
          </tbody>
      </table>
  );
}

export default RainfallTable
