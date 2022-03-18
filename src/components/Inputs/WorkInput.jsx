import './inputs.scss';
import WorkButton from './WorkButton';
import { useState } from 'react';

const WorkInput = () => {

    const [location, setLocation] = useState(false);

    const switchLocation = () => {
        setLocation(!location);
    }

  return (
    <div className='work-form-div'>
        <form className='work-form'>
            <div className='work-form-labels'>
                <label className='work-form-label' htmlFor="work-type">Type of Work</label>
                <label className='work-form-label' htmlFor="work-duration">Duration (in hours)</label>
                <label className='work-form-label' htmlFor="work-location-checkbox">Will there be welding involved?</label>
                <label className='work-form-label' htmlFor="work-location-checkbox">Will you need crane support?</label>
                <label className='work-form-label' htmlFor="work-location">Location</label>
            </div>
            <div className='work-form-inputs'>
                <input className='work-form-input' type="text" />
                <input className='work-form-input' type="number" />
                <input className='work-form-input' type="checkbox" />
                <input className='work-form-input' type="checkbox" />
                <button className='work-form-input-button' type='button' onClick={switchLocation}>{location ? "Outside" : "Inside"}</button>
            </div>    
        </form>
        <WorkButton />
    </div>
  )
}

export default WorkInput
