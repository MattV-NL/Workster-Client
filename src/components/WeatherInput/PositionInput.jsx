import Input from '../Inputs/Input';
import '../Inputs/inputs.scss';

const onChange = () => {
  console.log('to be determined');
};

const PositionInput = () => {
  return (
    <div className='work-form-layout'>
      <form className='work-form'>
        <div className='label-input-container'>
          <label className='work-form-label' htmlFor='latitude'>
            Latitude
          </label>
          <Input
            id='latitude'
            type='number'
            value=''
            required='false'
            onChange={onChange}
          />

          <label className='work-form-label' htmlFor='longitude'>
            Latitude
          </label>
          <Input
            id='longitude'
            type='number'
            value=''
            required='false'
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default PositionInput;
