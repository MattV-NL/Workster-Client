import Header from './components/Header/Header';
import DataContextProvider from './contexts/DataContext';
import InputContextProvider from './contexts/InputContext';
import WeatherChart from './components/Charts/WeatherChart';
import WeatherTable from './components/Tables/WeatherTable';
import WeatherButton from './components/Inputs/WeatherButton';

function App() {
  return (
    <>
      <Header />
      <DataContextProvider>
        <InputContextProvider>
          <div className='layout'>
            <WeatherTable />
            <WeatherButton />
            <WeatherChart />
          </div>
        </InputContextProvider>
      </DataContextProvider>
    </>
  );
}

export default App;
