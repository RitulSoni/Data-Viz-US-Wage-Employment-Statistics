import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Tableau from './Tableau';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tableau" element={<Tableau />} />
      <Route path="/Paper" element={<PDFViewer />} />
      <Route path="/Github" element={<ExternalRedirect to="https://github.com/RitulSoni/Data-Viz-US-Wage-Employment-Statistics.git" />} />
    </Routes>
  );
}

function ExternalRedirect({ to }) {
  useEffect(() => {
    const newWindow = window.open(to, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }, [to]);

  return null;
}

function PDFViewer() {       
  const [height, setHeight] = useState('100vh'); // initial value
  const navigate = useNavigate();

  useEffect(() => {
    // set height to the window innerHeight
    setHeight(`${window.innerHeight}px`);
  }, []); // empty dependency array means this effect runs once on mount

  return (
    <div>
      <button onClick={() => navigate(-1)} className="backButton">Go Back</button> {/* this button takes the user back */}
      <embed src="/static/Telephone Operator Analysis.pdf" type="application/pdf" width="100%" height={height} />
    </div>
  );
}

export default App;
