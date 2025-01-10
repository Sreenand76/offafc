import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ProductDetailPage from './Components/ProductDetailPage';
import Header from './Components/Header';



const App = () => {
  return (
    <Router>
       <Header />
      <Routes>   
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductDetailPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
