import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { paths } from './constants';
import WorkInputContextProvider from './contexts/WorkInputContext';
import WorkDataContextProvider from './contexts/WorkDataContext';
import Home from './components/Home/Home';
import WorkForm from './components/WorkInput/WorkForm';
import WorkTable from './components/Tables/WorkTable';
import NotFound from './components/NotFound';
import ResetButton from './components/WorkInput/ResetButton';
import ResetWarningModal from './components/Modals/ResetWarningModal';
import WeatherWarningModal from './components/Modals/WeatherWarningModal';
import WorkWarningModal from './components/Modals/WorkWarningModal';
import SortWorkTable from './components/SortTable/SortWorkTable';
import WeatherDataContextProvider from './contexts/WeatherDataContext';
import FetchButton from './components/WeatherInput/FetchButton';
import WeatherTable from './components/Tables/WeatherTable';
import PositionInput from './components/WeatherInput/PositionInput';
import PositionContextProvider from './contexts/PositionContext';
import WeatherChart from './components/Charts/WeatherChart';
import WorkChart from './components/Charts/WorkChart';
import TitleNav from './components/Header/TitleNav';
import AuthenticationContextProvider from './contexts/AuthenticationContext';
import Account from '../src/components/Account/Account';

function App() {
  return (
    <PositionContextProvider>
      <WeatherDataContextProvider>
        <WorkDataContextProvider>
          <WorkInputContextProvider>
            <AuthenticationContextProvider>
              <Router>
                <TitleNav />
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
                        <ResetButton />
                        <WeatherWarningModal />
                        <ResetWarningModal />
                      </Route>
                      <Route exact path={paths.WORK}>
                        <WorkForm />
                        <SortWorkTable />
                        <WorkTable />
                        <WorkChart />
                        <ResetButton />
                        <WorkWarningModal />
                        <ResetWarningModal />
                      </Route>
                      <Route exact path={paths.ACCOUNT}>
                        <Account />
                      </Route>
                      <Route>
                        <NotFound />
                      </Route>
                    </Switch>
                  </div>
                </div>
              </Router>
            </AuthenticationContextProvider>
          </WorkInputContextProvider>
        </WorkDataContextProvider>
      </WeatherDataContextProvider>
    </PositionContextProvider>
  );
}

export default App;
