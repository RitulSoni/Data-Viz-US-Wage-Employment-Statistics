import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Home from './Home';
import Tableau from './Tableau';
import Header from './Header';
import './App.css';

function App() {
  const location = useLocation();
  const showHeader = location.pathname !== '/tableau';

  return (
    <div className="app">
      {showHeader && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tableau" element={<Tableau />} />
          <Route path="/Paper" element={<PDFViewer />} />
        </Routes>
      </main>
    </div>
  );
}


function PDFViewer() {       
  const [height, setHeight] = useState('100vh');
  const navigate = useNavigate();

  useEffect(() => {
    const updateHeight = () => {
      setHeight(`${window.innerHeight - 80}px`);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="pdf-viewer">
      <div className="pdf-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </button>
        <h1 className="pdf-title">Research Paper: Technology Displacement and Labor Markets</h1>
      </div>
      <embed 
        src="/static/Tech Deplacement and Labor Markets.pdf" 
        type="application/pdf" 
        className="pdf-embed"
        height={height}
      />
    </div>
  );
}

export default App;
