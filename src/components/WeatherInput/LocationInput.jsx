import { useContext } from 'react';
import { WeatherDataContext2 } from '../../contexts/WeatherDataContext2';
import Button from '../Inputs/Button';
import Input from '../Inputs/Input';
import { locationInput } from '../../constants';
import { LocationContext } from '../../contexts/LocationContext';

const LocationInput = () => {
  const { getLocation } = useContext(WeatherDataContext2);
  const { locationData } = useContext(LocationContext);

  const doSomething = () => {
    console.log('hello');
    console.log(locationData);
  };
  return (
    <div>
      <Input
        id={locationInput.id}
        type={locationInput.type}
        value={locationData.value}
        required={locationInput.required}
        onChange={locationData.onChange}
      />
      <Button onClick={doSomething}>Enter Location</Button>
      <Button onClick={getLocation}>Use Current Location</Button>
    </div>
  );
};

export default LocationInput;
