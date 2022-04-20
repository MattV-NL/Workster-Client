import '../Inputs/inputs.scss';
import WorkButton from './WorkButton';
import Input from '../Inputs/Input';
import { workFormArray } from '../../constants';
import { WorkContext } from '../../contexts/WorkContext';
import { useContext, useMemo } from 'react';

const WorkForm = () => {
  const { workSubmit } = useContext(WorkContext);

  useMemo(() => {
    workFormArray.map((item) => {
      item.onChange = workSubmit;
      item.value = '';
    });
  });

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

export default WorkForm;
