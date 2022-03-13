import Header from './components/Header/Header'
import Layout from './components/Layout/Layout';
import DataContextProvider from './contexts/DataContext';

function App() {
  
  return (
    <>
      <Header />
      <DataContextProvider>
        <Layout />
      </DataContextProvider>      
    </>
  );
}

export default App;
