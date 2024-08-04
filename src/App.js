import React from 'react';
import "./App.css"
import Header from './components/Header/Header';
import Cart from './components/Header/Cart';
import Home from './components/Home/Home';
import { Routes , Route } from 'react-router-dom';
import { AddProductProvider } from './components/context/AddProductProvider';

const App = () => {
  return (
    <div className="app">
      <Header />
        <AddProductProvider>
      <Routes>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
        </AddProductProvider>
    </div>
  )
}

export default App