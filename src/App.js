import Header from './components/Header/Header'
import Layout from './components/Layout/Layout';
import DataContextProvider from './contexts/DataContext';
import InputContextProvider from './contexts/InputContext';

function App() {
  
  return (
    <>
      <Header />
      <DataContextProvider>
        <InputContextProvider>
          <Layout />
        </InputContextProvider>
      </DataContextProvider>      
    </>
  );
}

export default App;
