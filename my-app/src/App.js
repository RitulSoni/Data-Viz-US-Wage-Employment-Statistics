import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Tableau from './Tableau';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tableau" element={<Tableau />} />
    </Routes>
  );
}

export default App;

