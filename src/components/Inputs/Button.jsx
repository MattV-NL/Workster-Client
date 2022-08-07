import './inputs.scss';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const ButtonComp = ({ onClick, children, id, type }) => (
  <div className='submit-button-container'>
    <Button type={type} onClick={onClick} id={id}>
      {children}
    </Button>
  </div>
);

ButtonComp.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default ButtonComp;
