import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
   <>
   <Router>
    <div>
      <Navbar />
      <Routes>
      <Route exact path="/" Component={Home} />
      </Routes>
    </div>
   </Router>
   </>
  );
}

export default App;
