import React, { useState, useEffect } from 'react';
import "./App.css"
import Header from './components/Header/Header';
import Cart from './components/Header/Cart';
import Home from './components/Home/Home';
import Guidelines from './components/Guidelines/Guidelines';
import About from './components/About/About';

import { Routes, Route } from 'react-router-dom';
import { AddProductProvider } from './components/context/AddProductProvider';
import FullNameProvider from './components/context/FullNameProvider';
import ProductsProvider from './components/context/ProductsProvider';
import ScrollProvider from './components/context/ScrollProvider';
import FirstAds from './components/Ads/FirstAds';
import SecoundAds from './components/Ads/SecoundAds';
import Loading from './components/Loading/Loading';
import Footer from './components/Footer/Footer';

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
              <ScrollProvider>
                <AddProductProvider>
                  <ProductsProvider>
                    <Header />
                    <Routes>
                      <Route path='/Cart' element={<Cart />} />
                      <Route path='/' element={<Home />} />
                      <Route path='/Guidelines/Guidelines' element={<Guidelines />} />
                      <Route path='/About/About' element={<About />} />
                    </Routes>
                  </ProductsProvider>
                </AddProductProvider>
              </ScrollProvider>
            </FullNameProvider>
            <SecoundAds />
            <FirstAds />
            <Footer />
          </>
        ) : (
          <Loading />
        )
      }
    </div >
  )
}

export default App