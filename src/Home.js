import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      <main className="main-section">
        <div className="content-wrapper">
          <div className="hero-text">
            <h1 className="main-title">
              US Labor Market Analysis
            </h1>
            <p className="main-subtitle">
              20 Years of Wage & Employment Statistics
            </p>
            
            <div className="stats-bar">
              <div className="stat">
                <span className="stat-number">20</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat">
                <span className="stat-number">800+</span>
                <span className="stat-label">Occupations</span>
              </div>
              <div className="stat">
                <span className="stat-number">50</span>
                <span className="stat-label">States</span>
              </div>
            </div>
            
            <p className="description">
              Comprehensive analysis of United States occupational wage and employment data 
              from 2003-2023. This study examines labor market trends, automation impacts, 
              and economic shifts using Bureau of Labor Statistics data, adjusted for inflation 
              using Consumer Price Index calculations.
            </p>
            
            <p className="author-credit">
              Made by <strong>Ritul Soni</strong>
            </p>
          </div>
          
          <div className="action-grid">
            <div className="action-card primary-card" onClick={() => navigate('/tableau')}>
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                </svg>
              </div>
              <h3>Data Visualizations</h3>
              <p>Interactive Tableau dashboard with comprehensive wage and employment analysis</p>
              <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </div>
            </div>
            
            <div className="action-card" onClick={() => window.open('https://narrative-visualization.vercel.app/', '_blank')}>
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <h3>Interactive Narrative</h3>
              <p>Guided storytelling experience through the data with contextual insights</p>
              <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <path d="M15 3h6v6"/>
                  <path d="M10 14L21 3"/>
                </svg>
              </div>
            </div>
            
            <div className="action-card" onClick={() => navigate('/paper')}>
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="9" y1="15" x2="15" y2="15"/>
                  <line x1="9" y1="11" x2="13" y2="11"/>
                </svg>
              </div>
              <h3>Research Paper</h3>
              <p>Academic analysis of automation's impact on telephone operator employment</p>
              <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
