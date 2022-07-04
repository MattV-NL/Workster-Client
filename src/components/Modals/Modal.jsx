import './modals.scss';
import PropTypes from 'prop-types';

const Modal = ({ display, onClick, children }) => (
  <div className='warning-message-container' style={{ display: `${display}` }}>
    <div className='modal-content'>
      <div className='close-button' onClick={onClick}>
        &times;
      </div>
      <div className='modal-text'>{children}</div>
    </div>
  </div>
);

Modal.propTypes = {
  display: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
