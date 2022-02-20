import Header from './components/Header/Header'
import FirstTable from './components/Tables/FirstTable';
import FirstChart from './components/Charts/FirstChart';

function App() {
  console.log('app');

  return (
    <div className='container'>
      <Header />
      <FirstTable />
      <FirstChart />
    </div>
  );
}

export default App;
