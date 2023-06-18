import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="container">
      <nav className="navBar">
        <button className="navButton" onClick={() => navigate('/paper')}>Paper</button>
        <button className="navButton" onClick={() => navigate('/about')}>About</button>
        <button className="navButton" onClick={() => navigate('/github')}>Github</button>
        <button className="navButton" onClick={() => navigate('/more')}>More</button>
      </nav>
      <div className="content">
        <p className="description">
          This project is my personal endeavor in data visualization and Data Science with the analysis of 
          the United States Occupational Wage and Employment Statistics data from the past two decades. I 
          sourced the data from the <a href="https://www.bls.gov/oes/tables.htm">Bureau of Labor Statistics</a> 
          and meticulously cleaned and organized it into a dataset using Python. To ensure accuracy, I adjusted all values 
          for inflation using the latest Consumer Price Index (CPI) data available at  
          <a href="https://www.usinflationcalculator.com/inflation/consumer-price-index-and-annual-percent-changes-from-1913-to-2008/"> US Inflation Calculator</a>. 
          As part of this project, I have also written a research paper that examines the effect of Automation on 
          Telephone Operator jobs over the past 20 years, which you can access through the link provided above.
        </p>
        <button className="centerButton" onClick={() => navigate('/Tableau')}>Data Viz</button>
      </div>
    </div>
  );
}

export default Home;
