import AuthRedirect from './AuthRedirect';
import WeatherRedirect from './WeatherRedirect';
import WorkRedirect from './WorkRedirect';
import AboutRedirect from './AboutRedirect';
import './dashboard.scss';

const DashBoard = () => {
  return (
    <div className='dashboard-container'>
      <AuthRedirect />
      <WeatherRedirect />
      <WorkRedirect />
      <AboutRedirect />
    </div>
  );
};

export default DashBoard;
