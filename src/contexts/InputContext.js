import { createContext, useState, useContext, useCallback } from 'react';
import { DataContext } from './DataContext';

export const InputContext = createContext();

const InputContextProvider = (props) => {
	const { submitWeatherValues } = useContext(DataContext);

	const [date, setDate] = useState('');
	const [precip, setPrecip] = useState(null);
	const [wind, setWind] = useState(null);

	const weatherSubmit = useCallback(
		(e) => {
			if (date && precip && wind) {
				e.preventDefault();
				submitWeatherValues(date, precip, wind);
				setDate('');
				setPrecip(null);
				setWind(null);
			} else {
				alert('Please fill out all weather information.');
			}
		},
		[date, precip, wind]
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
				submitDate,
				submitPrecip,
				submitWind,
				weatherSubmit,
			}}
		>
			{props.children}
		</InputContext.Provider>
	);
};

export default InputContextProvider;
