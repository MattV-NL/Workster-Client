import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { Modal } from 'antd';

const WeatherDetailsModal = ({ children }) => {
  const { isWeatherDetailsVisible, setIsWeatherDetailsVisible } =
    useContext(WeatherDataContext);
  const handleOkCancel = () => {
    setIsWeatherDetailsVisible(false);
  };
  return (
    <Modal
      title='Detailed Weather Information'
      visible={isWeatherDetailsVisible}
      onOK={handleOkCancel}
      onCancel={handleOkCancel}
    >
      {children}
    </Modal>
  );
};

export default WeatherDetailsModal;
