import { DateTime } from 'luxon';

export const date = DateTime.local();

export const weatherArray = Array(7)
	.fill(date)
	.map((date, index) => {
		let nextDate = date.plus({ days: index });
		return nextDate;
	})
	.map((date) => ({ date: date.toISODate(), precip: 0, wind: 0 }));

export const weatherMap = new Map();

weatherArray.map(({ date, precip, wind }) => {
	weatherMap.set(date, { date, precip, wind });
});
