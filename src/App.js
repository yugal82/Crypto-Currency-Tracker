import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
const CoinPage = React.lazy(() => import('./Pages/CoinPage'));
const HomePage = React.lazy(() => import('./Pages/HomePage'));
const Exchanges = React.lazy(() => import('./Pages/Exchanges'));
const NftCollectionPage = React.lazy(() => import('./Pages/NftCollectionPage'));
const SingleCollection = React.lazy(() => import('./Pages/SingleCollection'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <React.Suspense
                fallback='Loading'
              >
                <HomePage />
              </React.Suspense>
            }
          />
          <Route
            exact
            path='/coins/:id'
            element={
              <React.Suspense
                fallback='Loading'
              >
                <CoinPage />
              </React.Suspense>
            }
          />
          <Route
            exact
            path='/exchanges'
            element={
              <React.Suspense
                fallback='Loading'
              >
                <Exchanges />
              </React.Suspense>
            }
          />
          <Route
            exact
            path='/nft-collection'
            element={
              <React.Suspense
                fallback='Loading'
              >
                <NftCollectionPage />
              </React.Suspense>
            }
          />
          <Route
            exact
            path='/nft-collection/:contract_address'
            element={
              <React.Suspense
                fallback='Loading'
              >
                <SingleCollection />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
