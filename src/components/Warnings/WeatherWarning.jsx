import './warnings.scss';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';

const WeatherWarning = () => {
	const { warningDisplay, setWarningDisplay } = useContext(InputContext);

	const closeWarning = () => {
		setWarningDisplay('none');
	};
	return (
		<div
			className='warning-message-container'
			style={{ display: `${warningDisplay}` }}
		>
			<div className='warning-message'>
				<div className='close-button' onClick={closeWarning}>
					&times;
				</div>
				<div className='warning-text'>Please enter all weather Information</div>
			</div>
		</div>
	);
};

export default WeatherWarning;
