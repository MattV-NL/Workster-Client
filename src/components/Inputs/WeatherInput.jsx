import './inputs.scss';

const WeatherInput = () => {
  return (
    <div className='user-inputs'>
        <input type="text" className='weekday-input' placeholder='Day of the week'/>
        <input type="text" className='precip-input' placeholder='Precipitation amount'/>
        <input type="text" className='wind-input' placeholder='Wind Speed'/>
        <div className='submit-button-div'>
          <button className='submit-button'>Submit</button>
        </div>
    </div>
  )
}

export default WeatherInput
