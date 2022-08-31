import '../Inputs/inputs.scss';
import WorkButton from './WorkButton';
import InputComp from '../Inputs/Input';
import { workFormInputs } from '../../constants';
import { WorkInputContext } from '../../contexts/WorkInputContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { useContext } from 'react';
import WorkLocationsDropdown from './WorkLocationsDropdown';
import { DeleteOutlined } from '@ant-design/icons';
import { Space } from 'antd';

const WorkForm = () => {
  const { workData } = useContext(WorkInputContext);
  const { authStatus } = useContext(AuthenticationContext);

  return (
    <div className='form-layout'>
      <form className='form'>
        {[...workFormInputs.values()].map(({ label, id, type, required }) => {
          return (
            <div className='label-input-container' key={id}>
              <label className='form-label'>{label}</label>
              <InputComp
                id={id}
                type={type}
                value={workData[id].value}
                required={required}
                onChange={workData[id].onChange}
              />
            </div>
          );
        })}
        {authStatus.auth ? <WorkLocationsDropdown /> : ''}
      </form>
      <WorkButton />
      <div
        className='delete-button-container'
        onClick={() => {
          console.log('clicked, will eventually clear table');
        }}
      >
        Clear form <Space />
        <DeleteOutlined className='delete-button' />
      </div>
    </div>
  );
};

export default WorkForm;
