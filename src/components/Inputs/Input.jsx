import PropTypes from 'prop-types';
import '../Tables/tables.scss';
import { Input } from 'antd';

const InputComp = ({
  type,
  value,
  placeholder = 'enter value',
  required,
  onChange,
  id,
}) => {
  return (
    <Input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      {...(type === `checkbox` ? { checked: !!value } : {})}
      className='input-element'
    />
  );
};

InputComp.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  required: PropTypes.bool.isRequired,
};

export default InputComp;
