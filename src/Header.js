import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Research Paper', action: () => navigate('/paper') },
    { label: 'About', action: () => window.open('https://ritulsoni.com/about', '_blank') },
    { label: 'GitHub', action: () => window.open('https://github.com/RitulSoni/Data-Viz-US-Wage-Employment-Statistics.git', '_blank') },
    { label: 'Portfolio', action: () => window.open('https://ritulsoni.com', '_blank') }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => navigate('/')}>
          <span className="logo-text">DataViz</span>
          <span className="logo-subtitle">US Labor Statistics</span>
        </div>
        
        <nav className="desktop-nav">
          {navigationItems.map((item, index) => (
            <button 
              key={index}
              className="nav-item"
              onClick={item.action}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav">
          {navigationItems.map((item, index) => (
            <button 
              key={index}
              className="mobile-nav-item"
              onClick={() => {
                item.action();
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;