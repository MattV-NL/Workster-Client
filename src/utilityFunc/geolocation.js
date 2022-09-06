export const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};
