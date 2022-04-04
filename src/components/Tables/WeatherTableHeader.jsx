import './tables.scss';

const WeatherTableHeader = () => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Day of the Week</th>
          <th>Rainfall Amount</th>
          <th>Wind Speed</th>
        </tr>
      </thead>
    </table>
  )
}

export default WeatherTableHeader
