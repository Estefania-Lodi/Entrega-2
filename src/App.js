import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CartPage from './components/CartPage/CartPage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
          <Route path="/cremas" element={<ItemListContainer />} />
          <Route path="/maquillajes" element={<ItemListContainer />} />
          <Route path="/exfoliantes" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;