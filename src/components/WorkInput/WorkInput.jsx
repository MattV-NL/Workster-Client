import '../Inputs/inputs.scss';
import WorkButton from './WorkButton';
import Input from '../Inputs/Input';

const WorkInput = () => {
  const doSomething = () => {
    console.log('hello');
  };

  const workFormArray = [
    {
      label: 'Date',
      id: 'work-date',
      value: '',
      type: 'date',
      required: true,
      onChange: doSomething,
    },
    {
      label: 'Will there be work outside?',
      id: 'outside-input',
      value: false,
      type: 'checkbox',
      required: true,
      onChange: doSomething,
    },
    {
      label: 'Will there be welding involved?',
      id: 'welding-input',
      value: false,
      type: 'checkbox',
      required: true,
      onChange: doSomething,
    },
    {
      label: 'Is scaffolding required?',
      id: 'scaffolding-input',
      value: false,
      type: 'checkbox',
      required: true,
      onChange: doSomething,
    },
    {
      label: 'Work Details',
      id: 'details-input',
      value: 'some text',
      type: 'text',
      required: true,
      onChange: doSomething,
    },
  ];
  return (
    <div className='work-form-layout'>
      <form className='work-form'>
        {workFormArray.map(({ label, id, value, type, required, onChange }) => {
          return (
            <div className='label-input-container' key={id}>
              <label className='work-form-label'>{label}</label>
              <Input
                id={id}
                type={type}
                value={value}
                required={required}
                onChange={onChange}
              />
            </div>
          );
        })}
      </form>
      <WorkButton />
    </div>
  );
};

export default WorkInput;
