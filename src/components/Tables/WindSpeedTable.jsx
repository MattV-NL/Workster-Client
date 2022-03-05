import { useContext } from 'react';
import { FirstContext } from '../../contexts/FirstContext';
import './tables.scss';

const WindSpeedTable = () => {

  const {weatherValues} = useContext(FirstContext);

  const weekdays = weatherValues.map(weekday => weekday.name)
  const windValues = weatherValues.map(windValue => windValue.WindSpeed)

  return (
    <table className="table">
          <tbody>
            <tr>
              <th>Day of the Week</th>
              <th>Wind Speed</th>
            </tr>
              <tr>
                  <td>{weekdays[0]}</td>
                  <td>{windValues[0]}</td>
              </tr>
              <tr>
                  <td>{weekdays[1]}</td>
                  <td>{windValues[1]}</td>
              </tr>
              <tr>
                  <td>{weekdays[2]}</td>
                  <td>{windValues[2]}</td>
              </tr>
              <tr>
                  <td>{weekdays[3]}</td>
                  <td>{windValues[3]}</td>
              </tr>
              <tr>
                  <td>{weekdays[4]}</td>
                  <td>{windValues[4]}</td>
              </tr>
              <tr>
                  <td>{weekdays[5]}</td>
                  <td>{windValues[5]}</td>
              </tr>
              <tr>
                  <td>{weekdays[6]}</td>
                  <td>{windValues[6]}</td>
              </tr>
          </tbody>
      </table>
  );
}

export default WindSpeedTable;