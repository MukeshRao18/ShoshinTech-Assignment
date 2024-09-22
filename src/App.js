import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard';
import Container from './components/Content/Container';
function App() {
  return (
    <div className="App">
      <div className='application'>
        <div className='section1'>
          <Dashboard />
        </div>
        <div className='section2'>
          <div className='nav'>
            <Header />
          </div>
          <div className='cont'>
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
