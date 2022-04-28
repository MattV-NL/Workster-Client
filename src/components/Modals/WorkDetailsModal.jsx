import './modals.scss';
import { useContext, useCallback } from 'react';
import { WorkInputContext } from '../../contexts/WorkInputContext';

const WorkDetailsModal = ({ children }) => {
  const { modalDisplay, setModalDisplay } = useContext(WorkInputContext);

  const closeModal = useCallback(() => {
    setModalDisplay('none');
  }, [setModalDisplay]);
  return (
    <div
      className='work-details-container'
      style={{ display: `${modalDisplay}` }}
    >
      <div className='modal-content'>
        <div className='close-button' onClick={closeModal}>
          &times;
        </div>
        <div className='work-details-text'>{children}</div>
      </div>
    </div>
  );
};

export default WorkDetailsModal;
