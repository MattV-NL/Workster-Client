import './inputs.scss';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const Button2 = ({ onClick, children, id, type }) => (
  <div className='submit-button-container'>
    <Button type={type} onClick={onClick} id={id}>
      {children}
    </Button>
  </div>
);

Button2.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button2;
