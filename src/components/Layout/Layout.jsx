import './layout.scss';
import WeatherChart from '../Charts/WeatherChart';
import WeatherTable from '../Tables/WeatherTable';
import WeatherButton from '../Inputs/WeatherButton';

const Layout = () => {
  return (
    <div className='layout'>
      <WeatherTable />
      <WeatherButton />
      <WeatherChart />
    </div>
  );
};

export default Layout;
