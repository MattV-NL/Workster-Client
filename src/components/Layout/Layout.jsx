import './layout.scss';
import WeatherChart from '../Charts/WeatherChart';
import WeatherTable from '../Tables/WeatherTable';
import WeatherInput from '../Inputs/WeatherInput';

const Layout = () => {
  return (
    <div className='layout'>
      <WeatherInput />
      <div className='layout-tables'>
        <WeatherTable />
      </div>
      <WeatherChart />
    </div>
  )
}

export default Layout
