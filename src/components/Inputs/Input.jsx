import PropTypes from 'prop-types';
import '../Tables/tables.scss';

const Input = ({
  type,
  value,
  placeholder = 'enter value',
  required,
  onChange,
  id,
}) => {
  return (
    <input
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

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  required: PropTypes.bool.isRequired,
};

export default Input;
