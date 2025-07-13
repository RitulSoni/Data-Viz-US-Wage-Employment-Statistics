import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tableau.css';

function Tableau() {
  const vizContainerRef = useRef(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    
    script.onload = () => {
      setTimeout(() => setIsLoading(false), 2000);
    };
    
    document.body.appendChild(script);

    if (!vizContainerRef.current) return;

    const vizElement = vizContainerRef.current.getElementsByTagName('object')[0];

    const updateSize = () => {
      if (window.innerWidth > 800) {
        vizElement.style.width = '100%';
        vizElement.style.height = (window.innerHeight - 80) + 'px';
      } else if (window.innerWidth > 500) {
        vizElement.style.width = '100%';
        vizElement.style.height = (window.innerHeight - 80) + 'px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = (window.innerHeight - 60) + 'px';
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('resize', updateSize);
    }
  }, []);

  return (
    <div className="tableau-container">
      <div className="tableau-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </button>
        <div className="tableau-title">
          <h1>Interactive Data Visualizations</h1>
          <p>US Wage & Employment Statistics (2003-2023)</p>
        </div>
        <div className="tableau-actions">
          <button 
            className="action-button"
            onClick={() => window.open('https://public.tableau.com/app/profile/ritul.soni/viz/UnitedStatesWageandEmploymentStatisticsPast20Years/AutomaticallySized', '_blank')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <path d="M15 3h6v6"/>
              <path d="M10 14L21 3"/>
            </svg>
            View on Tableau
          </button>
        </div>
      </div>
      
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading visualization...</p>
          </div>
        </div>
      )}
      
      <div 
        className="tableau-viz-container" 
        id="viz1687058464557" 
        ref={vizContainerRef}
      >
        <object className="tableauViz" style={{ display: 'none' }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="UnitedStatesWageandEmploymentStatisticsPast20Years&#47;AutomaticallySized" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param name="static_image" value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Un&#47;UnitedStatesWageandEmploymentStatisticsPast20Years&#47;AutomaticallySized&#47;1.png" />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
        </object>
      </div>
    </div>
  );
}

export default Tableau;
