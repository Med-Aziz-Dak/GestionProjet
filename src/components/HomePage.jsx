import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import './HomePage.css';

const HomePage = () => {
  

  return (
    <div className="home-page">
      
      <div className="welcome-container">
        <h1 className="welcome-title">Select a project or get started with a new one</h1>
        
        <button 
          className="create-project-btn"
        >
          <FiPlusCircle className="btn-icon" />
          Create New Project
        </button>
      </div>

      

    </div>
  );
};

export default HomePage