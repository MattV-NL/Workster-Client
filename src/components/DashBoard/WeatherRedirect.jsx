import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';

const WeatherRedirect = () => {
  return (
    <Button className='dashboard-item' type='primary' block='true'>
      <Link to={paths.WEATHER}>Weather</Link>
    </Button>
  );
};

export default WeatherRedirect;
