import Header from './components/Header/Header'
import RainfallTable from './components/Tables/RainfallTable';
import WindRainChart from './components/Charts/WindRainChart';
import FirstContextProvider from './contexts/FirstContext';
import WindSpeedTable from './components/Tables/WindSpeedTable';

function App() {
  
  return (
    <div className='container'>
      <Header />
      <FirstContextProvider>       
        <RainfallTable />
        <WindSpeedTable />
        <WindRainChart />
      </FirstContextProvider>       
    </div>
  );
}

export default App;
