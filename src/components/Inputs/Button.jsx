import './inputs.scss';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, id }) => (
  <div className='submit-button-container'>
    <div className='submit-button' onClick={onClick} id={id}>
      {children}
    </div>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

export default Button;
