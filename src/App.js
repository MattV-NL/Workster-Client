import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { paths } from './constants';
import WorkInputContextProvider from './contexts/WorkInputContext';
import WorkDataContextProvider from './contexts/WorkDataContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import WeatherChart from './components/Charts/WeatherChart';
import WorkForm from './components/WorkInput/WorkForm';
import WorkTable from './components/Tables/WorkTable';
import WorkDetails from './components/Details/WorkDetails';
import WeatherDetails from './components/Details/WeatherDetails';
import NotFound from './components/NotFound';
import WorkChart from './components/Charts/WorkChart';
import WorkResetButton from './components/WorkInput/WorkResetButton';
import ResetWarningModal from './components/Modals/ResetWarningModal';
import WarningModal from './components/Modals/WarningModal';
import SortWorkTable from './components/SortTable/SortWorkTable';
import WeatherDataContextProvider from './contexts/WeatherDataContext';
import FetchButton from './components/WeatherInput/FetchButton';
import WeatherTable from './components/Tables/WeatherTable';
import PositionInput from './components/WeatherInput/PositionInput';
import PositionContextProvider from './contexts/PositionContext';

function App() {
  return (
    <PositionContextProvider>
      {' '}
      <WeatherDataContextProvider>
        <WorkDataContextProvider>
          <WorkInputContextProvider>
            <Router>
              <Header />
              <div className='layout-center'>
                <div className='layout'>
                  <Switch>
                    <Route exact path={['/', paths.HOME]}>
                      <Home />
                    </Route>
                    <Route exact path={paths.WEATHER}>
                      <PositionInput />
                      <FetchButton />
                      <WeatherTable />
                      <WeatherChart />
                    </Route>
                    <Route exact path={'/weather-details/:id'}>
                      <WeatherDetails />
                    </Route>
                    <Route exact path={paths.WORK}>
                      <WorkForm />
                      <SortWorkTable />
                      <WorkTable />
                      <WorkChart />
                      <WorkResetButton />
                      <WarningModal />
                      <ResetWarningModal />
                    </Route>
                    <Route exact path='/work-details/:id'>
                      <WorkDetails />
                    </Route>
                    <Route>
                      <NotFound />
                    </Route>
                  </Switch>
                </div>
              </div>
            </Router>
          </WorkInputContextProvider>
        </WorkDataContextProvider>
      </WeatherDataContextProvider>
    </PositionContextProvider>
  );
}

export default App;
