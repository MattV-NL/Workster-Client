import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import './tables.scss';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { weatherTableColumns } from '../../constants';

let n = 1;
const WeatherTable = () => {
  const { weatherValues } = useContext(WeatherDataContext);
  const weatherTableMap = new Map(weatherValues);
  const weatherValuesKeys = weatherTableMap.keys();
  const columns = Array.from(weatherTableColumns.values());
  const datasource = Array.from(weatherTableMap.values()).map(
    ({ dt, pop, wind_speed }) => {
      let date = new Date(dt * 1000).toDateString();
      let precip = pop * 100;
      let windSpeed = wind_speed * 3.6;
      let details = (
        <Link
          to={`/weather-details/${weatherValuesKeys.next().value}`}
          key={date}
        >
          More details...
        </Link>
      );

      return {
        date,
        precip,
        windSpeed,
        details,
      };
    }
  );

  datasource.map((item) => (item.key = n++));

  return <Table dataSource={datasource} columns={columns} />;
};

export default WeatherTable;
