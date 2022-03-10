import Header from './components/Header/Header'
import Layout from './components/Layout/Layout';
import FirstContextProvider from './contexts/FirstContext';

function App() {
  
  return (
    <>
      <Header />
      <FirstContextProvider>
        <Layout />
      </FirstContextProvider>       
    </>
  );
}

export default App;
