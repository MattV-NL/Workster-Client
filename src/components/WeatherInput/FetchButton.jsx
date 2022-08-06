import { useContext, useCallback } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { Button } from 'antd';

const FetchButton = () => {
  const { getLocation } = useContext(WeatherDataContext);

  const handleClick = useCallback(() => {
    getLocation();
  }, [getLocation]);

  return (
    <div>
      <Button type='primaty' onClick={handleClick}>
        Get Weather Info
      </Button>
    </div>
  );
};

export default FetchButton;
