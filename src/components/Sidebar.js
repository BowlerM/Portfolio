// src/components/Sidebar.js
import React, { useState } from 'react';
import { FaFolder, FaFileCode } from 'react-icons/fa';

import "./Sidebar.css"

const Sidebar = ({ openTab }) => {
    const [activeFile, setActiveFile] = useState();

    const handleTabOpen = (file) => {
        setActiveFile(file);
        openTab(file);
    }

  return (
    <div className="sidebar">
      <h3>Matthew Bowler</h3>
      <hr></hr>
      <div className="files">
      <div 
          className={`file ${activeFile === 'About.js' ? 'active' : ''}`} 
          onClick={() => handleTabOpen('About.js')}
        >
          <FaFileCode /> About.js
        </div>
        <div 
          className={`file ${activeFile === 'Projects.js' ? 'active' : ''}`} 
          onClick={() => handleTabOpen('Projects.js')}
        >
          <FaFolder /> Projects.js
        </div>
        <div 
          className={`file ${activeFile === 'Contact.js' ? 'active' : ''}`} 
          onClick={() => handleTabOpen('Contact.js')}
        >
          <FaFileCode /> Contact.js
        </div>
        <div 
          className={`file ${activeFile === 'Resume.js' ? 'active' : ''}`} 
          onClick={() => handleTabOpen('Resume.js')}
        >
          <FaFileCode /> Resume.js
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
