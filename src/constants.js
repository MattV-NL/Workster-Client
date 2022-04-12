import { DateTime } from 'luxon';

const createDate = () => {
	return new DateTime.utc();
};

export const weatherArray = Array(7)
	.fill(createDate())
	.map((date, index) => {
		let nextDate = date.plus({ days: index });
		return nextDate;
	})
	.map((date) => ({ date: date.toISODate(), precip: 0, wind: 0 }));

export const weatherMap = new Map();

weatherArray.map(({ date, precip, wind }) => {
	weatherMap.set(parseInt(date.replace(/-/g, '')), { date, precip, wind });
});
