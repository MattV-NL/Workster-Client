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
import WorkDetails from './components/Modals/WorkDetails';
import NotFound from './components/NotFound';
import WorkChart from './components/Charts/WorkChart';

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
                  <Route exact path={['/', paths.HOME]}>
                    <Home />
                  </Route>
                  <Route exact path={paths.WEATHER}>
                    <WeatherTable />
                    <WeatherButton />
                    <WeatherChart />
                  </Route>
                  <Route exact path={paths.WORK}>
                    <WorkForm />
                    <WorkTable />
                    <WorkChart />
                  </Route>
                  <Route exact path='/work-details/:id'>
                    <WorkDetails />
                  </Route>
                  <Route>
                    <NotFound />
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
