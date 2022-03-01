import Header from './components/Header/Header'
import FirstTable from './components/Tables/FirstTable';
import FirstChart from './components/Charts/FirstChart';
import FirstContextProvider from './contexts/FirstContext';

function App() {
  
  return (
    <div className='container'>
      <Header />          
      <FirstTable />
      <FirstChart />      
    </div>
  );
}

export default App;
