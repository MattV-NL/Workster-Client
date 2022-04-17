import '../Inputs/inputs.scss';
import WorkButton from './WorkButton';

const WorkInput = () => {
  return (
    <div className='work-form-layout'>
      <form className='work-form'>
        <label className='work-form-label'>Date</label>
        <input type='date' />
        <label className='work-form-label'>
          Will there be working outside?
        </label>
        <div className='checkbox-label'>
          Yes
          <input type='checkbox' />
          (if no leave blank)
        </div>
        <label className='work-form-label'>
          Will there be welding involved?
        </label>
        <div className='checkbox-label'>
          Yes
          <input type='checkbox' />
          (if no leave blank)
        </div>
        <label className='work-form-label'>Is Scaffolding Required?</label>
        <div className='checkbox-label'>
          Yes
          <input type='checkbox' />
          (if no leave blank)
        </div>
        <label className='work-form-label'>Work Details</label>
        <textarea></textarea>
      </form>
      <WorkButton />
    </div>
  );
};

export default WorkInput;
