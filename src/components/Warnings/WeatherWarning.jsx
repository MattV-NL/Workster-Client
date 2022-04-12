import './warnings.scss';
import { useCallback, useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';

const WeatherWarning = () => {
	const { warningDisplay, setWarningDisplay } = useContext(InputContext);

	const closeWarning = useCallback(() => {
		setWarningDisplay('none');
	}, [setWarningDisplay]);
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
