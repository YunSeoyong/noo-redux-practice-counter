import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Header from './components/Header';
import CounterPage from './pages/CounterPage';
import ClickerPage from './pages/ClickerPage';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/calc' element={<CounterPage />} />
            <Route path='/clicker' element={<ClickerPage />} />
        </Routes>
    </div>
  );
}

export default App;
