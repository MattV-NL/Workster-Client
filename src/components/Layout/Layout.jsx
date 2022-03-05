import './layout.scss'
import WeatherChart from '../Charts/WeatherChart'
import RainfallTable from '../Tables/RainfallTable'
import WindSpeedTable from '../Tables/WindSpeedTable'
import WeatherInput from '../Inputs/WeatherInput'

const Layout = () => {
  return (
    <div className='layout'>
      <WeatherInput />
      <div className='layout-tables'>
        <RainfallTable />
        <WindSpeedTable />
      </div>
      <WeatherChart />
    </div>
  )
}

export default Layout
