import './App.css';
import Login from './components/login';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <>
    <ChakraProvider>
      <div className="container">
        <h1 style={{ marginTop: '15px', marginBottom: '20px'}}>React Testing Component</h1>
        <Login data-testid="child" className="login-form"/>
      </div>
    </ChakraProvider>
    </>
  );
}

export default App;
