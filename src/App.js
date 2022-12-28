import './app.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { paths } from './constants';
import WorkInputContextProvider from './contexts/WorkInputContext';
import WorkDataContextProvider from './contexts/WorkDataContext';
import NotFound from './components/NotFound/NotFound';
import WeatherDataContextProvider from './contexts/WeatherDataContext';
import PositionContextProvider from './contexts/PositionContext';
import TitleNav from './components/Header/TitleNav';
import AuthenticationContextProvider from './contexts/AuthenticationContext';
import Account from '../src/components/Account/Account';
import SavedWork from './components/Account/SavedWork';
import AccountSettings from './components/Account/AccountSettings';
import { UserSettingsContext } from './contexts/UserSettingsContext';
import { useContext } from 'react';
import LogoutModal from './components/Modals/LogoutModal';
import { useEffect } from 'react';
import Weather from './pages/Weather';
import Work from './pages/Work';
import SignInSignUp from './pages/SignInSignUp';
import GetSettingsComponent from './components/GetSettingsComponent/GetSettingsComponent';
import DashBoard from './components/DashBoard/DashBoard';
import About from './pages/About';
import RecoverAccountPage from './pages/RecoverAccountPage';
import ConflictContextProvider from './contexts/ConflictContext';
import Footer from './components/Footer/Footer';

function App() {
  const { darkMode } = useContext(UserSettingsContext);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = 'var(--darkBackground)';
    } else {
      document.body.style.backgroundColor = 'var(--lightBackground)';
    }
  }, [darkMode]);

  return (
    <AuthenticationContextProvider>
      <PositionContextProvider>
        <WeatherDataContextProvider>
          <WorkDataContextProvider>
            <WorkInputContextProvider>
              <ConflictContextProvider>
                <div className={darkMode ? 'dark-body' : 'light-body'}>
                  <BrowserRouter>
                    <TitleNav />
                    <GetSettingsComponent />
                    <div className='second-child-body'>
                      <div className='layout'>
                        <Switch>
                          <Route exact path={['/', paths.DASHBOARD]}>
                            <DashBoard />
                          </Route>
                          <Route exact path={['/authentication', paths.AUTH]}>
                            <SignInSignUp />
                          </Route>
                          <Route exact path={paths.WEATHER}>
                            <Weather />
                          </Route>
                          <Route exact path={paths.WORK}>
                            <Work />
                          </Route>
                          <Route exact path={paths.ACCOUNT}>
                            <Account />
                            <LogoutModal />
                          </Route>
                          <Route exact path={paths.ABOUT}>
                            <About />
                          </Route>
                          <Route exact path={`${paths.SAVED_WORK}:location_id`}>
                            <SavedWork />
                          </Route>
                          <Route exact path={paths.SETTINGS}>
                            <AccountSettings />
                          </Route>
                          <Route exact path={paths.RECOVER}>
                            <RecoverAccountPage />
                          </Route>
                          <Route>
                            <NotFound />
                          </Route>
                        </Switch>
                      </div>
                    </div>
                    <Footer />
                  </BrowserRouter>
                </div>
              </ConflictContextProvider>
            </WorkInputContextProvider>
          </WorkDataContextProvider>
        </WeatherDataContextProvider>
      </PositionContextProvider>
    </AuthenticationContextProvider>
  );
}

export default App;
