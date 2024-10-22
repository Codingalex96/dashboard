import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import your sidebar component
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import Transactions from './components/Transactions'; // Import other components
import FAQ from './components/FAQ';
import './App.css';
import RevenueChart from './components/RevenueChart';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/charts" element={<RevenueChart />} />
            <Route path="/faq" element={<FAQ />} /> {/* Add this line for FAQ */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

