import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TrustedCompanies />
    </div>
  );
}

export default App;