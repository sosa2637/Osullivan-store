
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Categories from './Components/Categories';
import AllProducts from './Pages/AllProducts';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
</div>
  );
}

export default App;
