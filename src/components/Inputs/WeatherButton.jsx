import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';
import Button from './Button';

const WeatherButton = () => {
	const { weatherSubmit } = useContext(InputContext);

	return <Button handleClick={weatherSubmit} name='Enter Weather Info' />;
};

export default WeatherButton;
