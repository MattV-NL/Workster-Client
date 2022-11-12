import AuthRedirect from './AuthRedirect';
import WeatherRedirect from './WeatherRedirect';
import WorkRedirect from './WorkRedirect';
import './dashboard.scss';

const DashBoard = () => {
  return (
    <div className='dashboard-container'>
      <AuthRedirect />
      <WeatherRedirect />
      <WorkRedirect />
    </div>
  );
};

export default DashBoard;
