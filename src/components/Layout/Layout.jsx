import './layout.scss';
import WeatherChart from '../Charts/WeatherChart';
import WeatherTable from '../Tables/WeatherTable';
import WeatherButton from '../Inputs/WeatherButton';
import WorkInput from '../Inputs/WorkInput';

const Layout = () => {
  return (
    <div className='layout'>
      <WorkInput />
      <WeatherTable />
      <WeatherButton />
      <WeatherChart />
    </div>
  )
}

export default Layout
