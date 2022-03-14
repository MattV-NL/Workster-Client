import './layout.scss';
import WeatherChart from '../Charts/WeatherChart';
import WeatherTable from '../Tables/WeatherTable';
import SubmitButton from '../Inputs/SubmitButton';

const Layout = () => {
  return (
    <div className='layout'>
      <div className='layout-tables'>
        <WeatherTable />
      </div>
      <SubmitButton />
      <WeatherChart />
    </div>
  )
}

export default Layout
