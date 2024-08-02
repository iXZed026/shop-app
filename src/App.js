import React from 'react';
import "./App.css"
import Header from './components/Header/Header';
import Cart from './components/Header/Cart';
import { Routes , Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App