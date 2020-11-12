import React from 'react';
import MyHeader from './components/Header';
// import Content from './components/content';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Product from './components/Product';
// import ProductDetail from './components/ProductDetail';
// import ProductHome from './components/ProductHome';
import CartList from './components/CartList';
import './App.css';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div className="App">
      <MyHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={< MyHome />} /> */}
        <Route path="products" element={<Product />} />
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
