import { DateTime } from 'luxon';

const createDate = () => {
  return new DateTime.utc();
};

export const createWeatherValues = () =>
  new Map(
    Array(7)
      .fill(createDate())
      .map((date, days) => date.plus({ days }))
      .map((date) => ({
        date: date.toISODate(),
        precip: 0,
        wind: 0,
      }))
      .map((data) => [parseInt(data.date.replace(/-/g, '')), data])
  );

export const replaceDate = (time) =>
  parseInt(new DateTime.fromMillis(time).toISODate().replace(/-/g, ''));
