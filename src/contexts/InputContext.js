import { createContext, useState, useContext, useCallback } from 'react';
import { DataContext } from './DataContext';

export const InputContext = createContext();

const InputContextProvider = (props) => {
	const { submitWeatherValues } = useContext(DataContext);

	const [date, setDate] = useState('');
	const [precip, setPrecip] = useState(null);
	const [wind, setWind] = useState(null);
	const [warningDisplay, setWarningDisplay] = useState('none');

	const weatherSubmit = useCallback(
		(e) => {
			if (date && precip && wind) {
				e.preventDefault();
				submitWeatherValues(date, precip, wind);
				setDate('');
				setPrecip(null);
				setWind(null);
			} else {
				setWarningDisplay('flex');
			}
		},
		[submitWeatherValues, date, precip, wind]
	);

	const submitDate = ({ target: { value } }) => setDate(value);

	const submitPrecip = ({ target: { value } }) => setPrecip(value);

	const submitWind = ({ target: { value } }) => setWind(value);

	return (
		<InputContext.Provider
			value={{
				date,
				precip,
				wind,
				warningDisplay,
				submitDate,
				submitPrecip,
				submitWind,
				weatherSubmit,
				setWarningDisplay,
			}}
		>
			{props.children}
		</InputContext.Provider>
	);
};

export default InputContextProvider;
