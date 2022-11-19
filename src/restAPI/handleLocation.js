import { SERVER_EP } from '../constants';

export const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

export const getCoordinates = async (pos, units) => {
  const crd = pos.coords;
  const lat = crd.latitude;
  const lon = crd.longitude;
  const apiUrl = `${SERVER_EP.weather}/${lat},${lon},${units}`;
  const response = await fetch(apiUrl);
  return await response.json();
};

export const sendCoordinatesGeolocate = async (pos, user_id) => {
  const crd = pos.coords;
  const lat = crd.latitude.toFixed(3);
  const lon = crd.longitude.toFixed(3);
  const coordsJSON = {
    user_id,
    lat,
    lon,
  };
  const sendResponse = await fetch(SERVER_EP.saveLocation, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(coordsJSON),
  });
  const sendData = await sendResponse.json();
  console.log(sendData, 'geolocate');
};

export const sendCoordinatesManual = async (latitude, longitude, user_id) => {
  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);

  const coordsJSON = {
    user_id: user_id,
    lat: lat,
    lon: lon,
  };
  const sendResponse = await fetch(SERVER_EP.saveLocation, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(coordsJSON),
  });
  const sendData = await sendResponse.json();
  console.log(sendData, 'manual input');
};

export const manualLocationInput = async (lat, lon, units) => {
  const crd = {
    lat,
    lon,
  };
  const apiURL = `${SERVER_EP.weather}/${crd.lat},${crd.lon},${units}`;
  const response = await fetch(apiURL);
  return response.json();
};
