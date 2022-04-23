import '../Inputs/inputs.scss';
import WorkButton from './WorkButton';
import Input from '../Inputs/Input';
import { workFormInputs } from '../../constants';
import { WorkInputContext } from '../../contexts/WorkInputContext';
import { useContext } from 'react';
import Warning from '../Warnings/Warning';

const WorkForm = () => {
  const { workData } = useContext(WorkInputContext);

  return (
    <div className='work-form-layout'>
      <form className='work-form'>
        {[...workFormInputs.values()].map(({ label, id, type, required }) => {
          return (
            <div className='label-input-container' key={id}>
              <label className='work-form-label'>{label}</label>
              <Input
                id={id}
                type={type}
                value={workData[id].value}
                required={required}
                onChange={workData[id].onChange}
                checked={workData[id].value}
              />
            </div>
          );
        })}
      </form>
      <WorkButton />
      <Warning />
    </div>
  );
};

export default WorkForm;
