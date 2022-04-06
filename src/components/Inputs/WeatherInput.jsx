import '../Tables/tables.scss';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';
import Input from './Input';

const WeatherInput = () => {
	const { date, precip, wind, submitDate, submitPrecip, submitWind } =
		useContext(InputContext);

	return (
		<div className='table-input-row'>
			<div className='input-cells'>
				<Input
					inputClass='input-element'
					type='date'
					value={date}
					isRequired={true}
					handleChange={submitDate}
				/>
			</div>
			<div className='input-cells'>
				<Input
					inputClass='input-element'
					type='number'
					value={precip || ''}
					placeholder='Precipitation'
					isRequired={true}
					handleChange={submitPrecip}
				/>
			</div>
			<div className='input-cells'>
				<Input
					inputClass='input-element'
					type='number'
					value={wind || ''}
					placeholder='Wind Speed'
					isRequired
					handleChange={submitWind}
				/>
			</div>
		</div>
	);
};

export default WeatherInput;
