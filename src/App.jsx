import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Navbar />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
