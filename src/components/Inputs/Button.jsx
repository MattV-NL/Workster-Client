import './inputs.scss';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const ButtonInput = ({ onClick, children, id }) => (
  <div className='submit-button-container'>
    <Button type='primary' onClick={onClick} id={id}>
      {children}
    </Button>
  </div>
);

ButtonInput.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonInput;
