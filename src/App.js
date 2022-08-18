
import './App.css';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/coins/:id' element={<CoinPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
