import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { paths } from './constants';
import WorkInputContextProvider from './contexts/WorkInputContext';
import WorkDataContextProvider from './contexts/WorkDataContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import WeatherChart from './components/Charts/WeatherChart';
import WorkForm from './components/WorkInput/WorkForm';
import WorkTable from './components/Tables/WorkTable';
import WorkDetails from './components/WorkDetails/WorkDetails';
import NotFound from './components/NotFound';
import WorkChart from './components/Charts/WorkChart';
import WorkResetButton from './components/WorkInput/WorkResetButton';
import ResetWarningModal from './components/Modals/ResetWarningModal';
import WarningModal from './components/Modals/WarningModal';
import SortWorkTable from './components/SortTable/SortWorkTable';
import WeatherDataContextProvider2 from './contexts/WeatherDataContext2';
import FetchButton from './components/WeatherInput/FetchButton';
import WeatherTable2 from './components/Tables/WeatherTable2';

function App() {
  return (
    <WeatherDataContextProvider2>
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
                    <FetchButton />
                    <WeatherTable2 />
                    <WeatherChart />
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
    </WeatherDataContextProvider2>
  );
}

export default App;
