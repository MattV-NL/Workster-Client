import Header from './components/Header/Header';
import DataContextProvider from './contexts/DataContext';
import InputContextProvider from './contexts/InputContext';
import WorkContextProvider from './contexts/WorkContext';
import WeatherChart from './components/Charts/WeatherChart';
import WeatherTable from './components/Tables/WeatherTable';
import WeatherButton from './components/WeatherInput/WeatherButton';
import WorkForm from './components/WorkInput/WorkForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkTable from './components/Tables/WorkTable';
import NotFound from './components/NotFound';
import { NOT_FOUND_KEY, WORK_KEY } from './constants';

function App() {
  return (
    <DataContextProvider>
      <InputContextProvider>
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
                <WorkContextProvider>
                  <WorkForm />
                  <WorkTable />
                </WorkContextProvider>
              </Route>
              <Route>
                <NotFound path={NOT_FOUND_KEY} />
              </Route>
            </Switch>
          </div>
        </Router>
      </InputContextProvider>
    </DataContextProvider>
  );
}

export default App;
