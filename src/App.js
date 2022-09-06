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
import RegLoginModal from './components/Modals/RegLoginModal';
import AccountPageModal from './components/Modals/AccountPageModal';
import SaveWorkButton from './components/WorkInput/SaveWorkButton';
import SaveWorkModal from './components/Modals/SaveWorkModal';
import SavedWork from './components/Account/SavedWork';

function App() {
  return (
    <AuthenticationContextProvider>
      <PositionContextProvider>
        <WeatherDataContextProvider>
          <WorkDataContextProvider>
            <WorkInputContextProvider>
              <Router>
                <TitleNav />
                <div className='layout-center'>
                  <div className='layout'>
                    <Switch>
                      <Route exact path={['/', paths.HOME]}>
                        <Home />
                        <RegLoginModal />
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
                        <WorkTable />
                        <SaveWorkButton />
                        <WorkChart />
                        <ResetButton />
                        <WorkWarningModal />
                        <ResetWarningModal />
                        <SaveWorkModal />
                      </Route>
                      <Route exact path={paths.ACCOUNT}>
                        <Account />
                        <AccountPageModal />
                      </Route>
                      <Route exact path={`${paths.SAVED_WORK}:location_id`}>
                        <SavedWork />
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
    </AuthenticationContextProvider>
  );
}

export default App;
