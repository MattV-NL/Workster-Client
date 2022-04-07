import { createContext, useState } from 'react';
import { weatherMap, weatherArray } from '../constants';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
	const [weatherValues, setWeatherValues] = useState(weatherArray);

	const submitWeatherValues = (date, precip, wind) => {
		weatherMap.set(date, { date, precip, wind });
		console.log(parseInt(date.replace(/-/g, '')));
		const nextWeatherMap = new Map([...weatherMap.entries()].sort());
		setWeatherValues(Array.from(nextWeatherMap.values()));
	};

	return (
		<DataContext.Provider value={{ weatherValues, submitWeatherValues }}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContextProvider;
