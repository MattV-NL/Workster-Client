import Header from './components/Header/Header';
import DataContextProvider from './contexts/DataContext';
import InputContextProvider from './contexts/InputContext';
import WorkContextProvider from './contexts/WorkContext';
import WeatherChart from './components/Charts/WeatherChart';
import WeatherTable from './components/Tables/WeatherTable';
import WeatherButton from './components/WeatherInput/WeatherButton';
import WorkInput from './components/WorkInput/WorkInput';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkTable from './components/Tables/WorkTable';

function App() {
  return (
    <Router>
      <Header />
      <DataContextProvider>
        <InputContextProvider>
          <div className='layout'>
            <Switch>
              <Route exact path={'/'}>
                <WeatherTable />
                <WeatherButton />
                <WeatherChart />
              </Route>
              <Route exact path={'/work'}>
                <WorkContextProvider>
                  <WorkInput />
                  <WorkTable />
                </WorkContextProvider>
              </Route>
            </Switch>
          </div>
        </InputContextProvider>
      </DataContextProvider>
    </Router>
  );
}

export default App;
