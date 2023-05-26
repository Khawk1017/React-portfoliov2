import React from 'react';
import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Layout />}/>
    </Routes>
    </Router>
   </>
  );
}

export default App;
