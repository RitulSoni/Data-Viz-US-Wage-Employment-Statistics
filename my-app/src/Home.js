import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="container">
      <nav className="navBar">
        <button className="navButton" onClick={() => navigate('/home')}>Home</button>
        <button className="navButton" onClick={() => navigate('/paper')}>Paper</button>
        <button className="navButton" onClick={() => navigate('/about')}>About</button>
        <button className="navButton" onClick={() => navigate('/github')}>Github</button>
        <button className="navButton" onClick={() => navigate('/more')}>More</button>
      </nav>
      <div className="content">
        <button className="centerButton" onClick={() => navigate('/Tableau')}>Data Viz</button>
      </div>
    </div>
  );
}

export default Home;
