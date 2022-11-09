import PositionInput from '../components/WeatherInput/PositionInput';
import WeatherTable from '../components/Tables/WeatherTable';
import WeatherChart from '../components/Charts/WeatherChart';
import WeatherWarningModal from '../components/Modals/WeatherWarningModal';
import ResetWarningModal from '../components/Modals/ResetWarningModal';
import SaveLocationModal from '../components/Modals/SaveLocationModal';

const Weather = () => {
  return (
    <>
      <PositionInput />
      <WeatherTable />
      <WeatherChart />
      <WeatherWarningModal />
      <ResetWarningModal />
      <SaveLocationModal />
    </>
  );
};

export default Weather;
