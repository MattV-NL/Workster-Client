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
              <th>Wind Speed</th>
            </tr>
            {weatherValues.map(({ name, Precipitation, WindSpeed }) => (
                  <tr key = {`${name} + ${Precipitation}`}>
                      <td>{name}</td>
                      <td>{Precipitation}</td>
                      <td>{WindSpeed}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  );
}

export default RainfallTable
