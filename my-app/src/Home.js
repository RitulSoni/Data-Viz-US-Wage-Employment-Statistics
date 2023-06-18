import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  return (
    <div>
      <nav>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
      </nav>
      <button style={{ fontSize: '2rem', padding: '10px' }} onClick={() => navigate('/tableau')}>
        Go to Tableau
      </button>
    </div>
  );
}

export default Home;
