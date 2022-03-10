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
            {weatherValues.map(({ name, WindSpeed }) => (
                  <tr key={name + WindSpeed}>
                      <td>{name}</td>
                      <td>{WindSpeed}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  );
}

export default WindSpeedTable;