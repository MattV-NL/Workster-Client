import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { paths } from './constants';
import WeatherDataContextProvider from './contexts/WeatherDataContext';
import WeatherInputContextProvider from './contexts/WeatherInputContext';
import WorkInputContextProvider from './contexts/WorkInputContext';
import WorkDataContextProvider from './contexts/WorkDataContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import WeatherChart from './components/Charts/WeatherChart';
import WeatherTable from './components/Tables/WeatherTable';
import WeatherButton from './components/WeatherInput/WeatherButton';
import WorkForm from './components/WorkInput/WorkForm';
import WorkTable from './components/Tables/WorkTable';
import WorkDetails from './components/WorkDetails/WorkDetails';
import NotFound from './components/NotFound';
import WorkChart from './components/Charts/WorkChart';
import WeatherResetButton from './components/WeatherInput/WeatherResetButton';
import WorkResetButton from './components/WorkInput/WorkResetButton';
import ResetWarningModal from './components/Modals/ResetWarningModal';
import WarningModal from './components/Modals/WarningModal';
import SortWeatherTable from './components/SortTable/SortWeatherTable';
import SortWorkTable from './components/SortTable/SortWorkTable';
import WeatherDataContextProvider2 from './contexts/WeatherDataContext2';
import FetchButton from './components/WeatherInput/FetchButton';

function App() {
  return (
    <WeatherDataContextProvider2>
      <WeatherDataContextProvider>
        <WeatherInputContextProvider>
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
                        <SortWeatherTable />
                        <WeatherTable />
                        <WeatherButton />
                        <FetchButton />
                        <WeatherChart />
                        <WeatherResetButton />
                        <WarningModal />
                        <ResetWarningModal />
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
        </WeatherInputContextProvider>
      </WeatherDataContextProvider>
    </WeatherDataContextProvider2>
  );
}

export default App;
