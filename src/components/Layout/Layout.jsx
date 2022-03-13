import './layout.scss';
import WeatherChart from '../Charts/WeatherChart';
import WeatherTable from '../Tables/WeatherTable';

const Layout = () => {
  return (
    <div className='layout'>
      <div className='layout-tables'>
        <WeatherTable />
      </div>
      <WeatherChart />
    </div>
  )
}

export default Layout
