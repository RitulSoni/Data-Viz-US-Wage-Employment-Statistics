import React, { useEffect, useRef } from 'react';

function Tableau() {
  const vizContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    document.body.appendChild(script);

    if (!vizContainerRef.current) return;

    const vizElement = vizContainerRef.current.getElementsByTagName('object')[0];

    if (window.innerWidth > 800) {
      vizElement.style.width = '100%';
      vizElement.style.height = (window.innerHeight * 0.95) + 'px';
    } else if (window.innerWidth > 500) {
      vizElement.style.width = '100%';
      vizElement.style.height = (window.innerHeight * 0.95) + 'px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '100vh';
    }

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div 
        className="tableauPlaceholder" 
        id="viz1687058464557" 
        ref={vizContainerRef}
        style={{ position: 'relative' }}
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
  );
}

export default Tableau;
