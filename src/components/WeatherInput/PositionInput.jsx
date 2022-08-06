import Input2 from '../Inputs/Input';
import { positionFormInputs } from '../../constants';
import '../Inputs/inputs.scss';
import { useContext } from 'react';
import { PositionContext } from '../../contexts/PositionContext';

const PositionInput = () => {
  const { positionData } = useContext(PositionContext);
  return (
    <div className='work-form-layout'>
      <form className='work-form'>
        {[...positionFormInputs.values()].map(
          ({ label, id, type, required }) => {
            return (
              <div className='label-input-container' key={id}>
                <label className='work-form-label'>{label}</label>
                <Input2
                  id={id}
                  type={type}
                  value={positionData[id].value}
                  required={required}
                  onChange={positionData[id].onChange}
                />
              </div>
            );
          }
        )}
      </form>
    </div>
  );
};

export default PositionInput;
