import './modals.scss';
import { useCallback, useState } from 'react';

const WorkDetails = () => {
  const [modalDisplay, setModalDisplay] = useState('none');

  const controlModal = useCallback(() => {});

  return (
    <div className='workDetails-container'>
      <div className='workDetails-message'>
        <div className='workDetails-close-button'>&times;</div>
        <div className='workDetails-text'>this is a test</div>
      </div>
    </div>
  );
};

export default WorkDetails;
