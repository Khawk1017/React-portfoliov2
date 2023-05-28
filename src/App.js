import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
   <>
   <Router>
    <div>
      <Navbar />
      <Footer />
      <Routes>
      <Route exact path="/" Component={Home} />
      </Routes>
    </div>
   </Router>
   </>
  );
}

export default App;
