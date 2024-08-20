import React, { useState, useEffect } from 'react';
import "./App.css"
import Header from './components/Header/Header';
import Cart from './components/Header/Cart';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { AddProductProvider } from './components/context/AddProductProvider';
import FullNameProvider from './components/context/FullNameProvider';
import FirstAds from './components/Ads/FirstAds';
import SecoundAds from './components/Ads/SecoundAds';
import Loading from './components/Loading/Loading';

const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let showWebsite = setTimeout(() => {
      setLoading(true);
    }, 4000);

    return () => clearTimeout(showWebsite)

  }, [])

  return (
    <div className="app">
      {
        loading ? (
          <>
            <FullNameProvider>
              <Header />
              <AddProductProvider>
                <Routes>
                  <Route path='/Cart' element={<Cart />} />
                  <Route path='/' element={<Home />} />
                </Routes>
              </AddProductProvider>
            </FullNameProvider>
            <SecoundAds />
            <FirstAds /></>
        ) : (
          <Loading />
        )
      }
    </div>
  )
}

export default App