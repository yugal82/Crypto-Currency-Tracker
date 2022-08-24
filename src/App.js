
import './App.css';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Exchanges from './Pages/Exchanges';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/coins/:id' element={<CoinPage />}></Route>
          <Route path='/exchanges' element={<Exchanges />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
