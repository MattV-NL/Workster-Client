import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';
import Button from './Button';

const WeatherButton = () => {
	const { weatherSubmit } = useContext(InputContext);

	return <Button onClick={weatherSubmit}>Enter Weather Info</Button>;
};

export default WeatherButton;
