import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';

import MyHeader from './components/Header';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import CartList from './components/CartList';

const App = () => {
  return (
    <div className="App">
      <MyHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={< MyHome />} /> */}
        {/* <Route path="products" element={<Product />} /> */}
        {/* <Route path="products/:slug" element={< ProductDetail />} /> */}
        { /* <Route path=":productId" element={<ProductDetail />} /> */}
        <Route path="about" element={< About />} />
        <Route path="cartlist" element={< CartList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
