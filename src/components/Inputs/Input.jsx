import PropTypes from 'prop-types';
import '../Tables/tables.scss';

const Input = ({ type, value, placeholder, required, onChange, id }) => (
  <input
    id={id}
    type={type}
    value={value}
    placeholder={placeholder}
    required={required}
    onChange={onChange}
    className='input-element'
  />
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.node.isRequired,
  required: PropTypes.bool.isRequired,
};

export default Input;
