import Header from './components/Header/Header';
import WeatherDataContextProvider from './contexts/WeatherDataContext';
import WeatherInputContextProvider from './contexts/WeatherInputContext';
import WorkInputContextProvider from './contexts/WorkInputContext';
import WeatherChart from './components/Charts/WeatherChart';
import WeatherTable from './components/Tables/WeatherTable';
import WeatherButton from './components/WeatherInput/WeatherButton';
import WorkForm from './components/WorkInput/WorkForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkTable from './components/Tables/WorkTable';
import NotFound from './components/NotFound';
import { NOT_FOUND_KEY, WORK_KEY } from './constants';
import WorkDataContextProvider from './contexts/WorkDataContext';
import WorkDetails from './components/Modals/WorkDetails';

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
