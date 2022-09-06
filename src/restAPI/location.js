import { SERVER_URL } from '../constants';

export const manualLocationInput = async (latitude, longitude) => {
  const crd = {
    latitude: latitude,
    longitude: longitude,
  };
  const apiURL = `${SERVER_URL.weather}${crd.latitude},${crd.longitude}`;
  const response = await fetch(apiURL);
  return await response.json();
};
