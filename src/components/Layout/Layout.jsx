import './layout.scss'
import WeatherChart from '../Charts/WeatherChart'
import RainfallTable from '../Tables/RainfallTable'
import WindSpeedTable from '../Tables/WindSpeedTable'

const Layout = () => {
  return (
    <div className='layout'>
      <div className='layout-tables'>
        <RainfallTable />
        <WindSpeedTable />
      </div>
      <WeatherChart />
    </div>
  )
}

export default Layout
