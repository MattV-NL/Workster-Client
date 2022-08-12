import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import './tables.scss';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { weatherTableColumns } from '../../constants';
import WeatherDetailsModal from '../Modals/WeatherDetailsModal';

let n = 1;
const WeatherTable = () => {
  const { weatherValues, setIsWeatherDetailsVisible, weatherDataMap } =
    useContext(WeatherDataContext);
  const weatherTableMap = new Map(weatherValues);
  const weatherValuesKeys = weatherTableMap.keys();

  const showDetails = (id) => {
    setIsWeatherDetailsVisible(true);
    const weatherData = weatherDataMap.get(parseInt(id));
    console.log(weatherData);
  };
  const columns = Array.from(weatherTableColumns.values());
  const datasource = Array.from(weatherTableMap.values()).map(
    ({ dt, pop, wind_speed }) => {
      let date = new Date(dt * 1000).toDateString();
      let precip = pop * 100;
      let windSpeed = wind_speed * 3.6;
      let details = (
        <div onClick={showDetails(weatherValuesKeys.next().value)}>
          More Details...
        </div>
      );

      // onClick, open modal, the modal should show weather details based
      // on the id.

      return {
        date,
        precip: precip.toFixed(2),
        windSpeed: windSpeed.toFixed(2),
        details,
      };
    }
  );

  datasource.map((item) => (item.key = n++));

  return (
    <div className='table'>
      <Table dataSource={datasource} columns={columns} />
    </div>
  );
};

export default WeatherTable;
