import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NOT_FOUND_KEY, WEATHER_KEY, WORK_KEY } from './constants';
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
import WorkDetails from './components/Modals/WorkDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <WeatherDataContextProvider>
      <WeatherInputContextProvider>
        <WorkDataContextProvider>
          <WorkInputContextProvider>
            <Router>
              <Header />
              <div className='layout'>
                <Switch>
                  <Route exact path={'/'}>
                    <Home />
                  </Route>
                  <Route exact path={WEATHER_KEY}>
                    <WeatherTable />
                    <WeatherButton />
                    <WeatherChart />
                  </Route>
                  <Route exact path={WORK_KEY}>
                    <WorkForm />
                    <WorkTable />
                  </Route>
                  <Route exact path='/work-details/:id'>
                    <WorkDetails />
                  </Route>
                  <Route>
                    <NotFound path={NOT_FOUND_KEY} />
                  </Route>
                </Switch>
              </div>
            </Router>
          </WorkInputContextProvider>
        </WorkDataContextProvider>
      </WeatherInputContextProvider>
    </WeatherDataContextProvider>
  );
}

export default App;
