import { useContext, useCallback } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Button2 from '../Inputs/Button';

const ResetButton = () => {
  const { setIsModalVisible } = useContext(WeatherDataContext);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, [setIsModalVisible]);

  return (
    <div className='button-container'>
      <Button2 type='primary' onClick={showModal}>
        Reset Info
      </Button2>
    </div>
  );
};

export default ResetButton;
