import { createContext, useState } from 'react';
import { weatherMap, weatherArray } from '../constants';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
	const [weatherValues, setWeatherValues] = useState(weatherArray);

	const submitWeatherValues = (date, precip, wind) => {
		weatherMap.set(parseInt(date.replace(/-/g, '')), { date, precip, wind });
		const nextWeatherMap = new Map([...weatherMap].sort((a, b) => a[0] - b[0]));
		setWeatherValues(Array.from(nextWeatherMap.values()));
	};

	return (
		<DataContext.Provider value={{ weatherValues, submitWeatherValues }}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContextProvider;
