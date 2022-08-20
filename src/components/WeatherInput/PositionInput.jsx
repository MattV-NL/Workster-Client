import InputComp from '../Inputs/Input';
import { positionFormInputs } from '../../constants';
import '../Inputs/inputs.scss';
import { useContext } from 'react';
import { PositionContext } from '../../contexts/PositionContext';

const PositionInput = () => {
  const { positionData } = useContext(PositionContext);
  return (
    <div className='form-layout'>
      <form className='form'>
        {[...positionFormInputs.values()].map(
          ({ label, id, type, required }) => {
            return (
              <div className='label-input-container' key={id}>
                <label className='form-label'>{label}</label>
                <InputComp
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
