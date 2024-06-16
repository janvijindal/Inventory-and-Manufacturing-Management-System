import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import Inventory from './pages/Inventory';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
