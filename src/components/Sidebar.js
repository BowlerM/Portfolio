import React, { useState } from 'react';
import { FaFolder, FaHashtag, FaJsSquare, FaAngleUp, FaAngleDown, FaTerminal, FaFolderOpen, FaInfoCircle, FaFilePdf } from 'react-icons/fa';

import "./Sidebar.css"

const Sidebar = ({ openTab, activeFile, setActiveFile}) => {
  const[isProjectsOpen, setIsProjectsOpen] = useState(false);
  const[activeFolder, setActiveFolder] = useState(null)

  const toggleProjectsDropdown = () => {
    setIsProjectsOpen(!isProjectsOpen);
    setActiveFile("");
    setActiveFolder("Projects");
  }


  const handleTabOpen = (file) => {
      setActiveFile(file);
      openTab(file);
      setActiveFolder(null);
  }

  return (
    <div className="sidebar">
      <h3 className="sidebar-header">Matthew Bowler</h3>
      <hr></hr>
      <div className="files">
      <div 
          className={`file ${activeFile === 'ABOUT.md' ? 'active' : ''}`} 
          onClick={() => handleTabOpen('ABOUT.md')}
        >
          <FaInfoCircle className="file-icon" style={{color: "#519ABA"}}/> 
          <span>ABOUT.md</span>
        </div>
        <div 
          className={`file ${activeFile === 'CV.pdf' ? 'active' : ''}`} 
          onClick={() => handleTabOpen('CV.pdf')}
        >
          <FaFilePdf className="file-icon" style={{color: "#C8333A"}} /> 
          <span>CV.pdf</span>
        </div>
        <div 
          className={`file ${activeFile === 'contact.css' ? 'active' : ''}`} 
          onClick={() => handleTabOpen('contact.css')}
        >
          <FaHashtag className="file-icon" style={{color: "#519ABA"}} />
          <span>contact.css</span>
        </div>
        <div 
          className={`file ${isProjectsOpen && activeFolder === "Projects" && !activeFile ? 'active' : ''}`}
          onClick={toggleProjectsDropdown}
        >
          {isProjectsOpen ? <FaFolderOpen className="file-icon" color="#ffd665"/> : <FaFolder className="file-icon" color="#ffd665"/>}
          <span>Projects</span>
          {isProjectsOpen ? <FaAngleUp className="dropdown-icon"/>: <FaAngleDown className="dropdown-icon"/>}
        </div>
        {isProjectsOpen && (
          <div className={"dropdown-content"}>
          <div 
              className={`file ${activeFile === 'StudyBot.js' ? 'active': ''}`}
              onClick={() => handleTabOpen('StudyBot.js')}
            >
              <FaJsSquare className="file-icon" style={{color: "#FFD43B"}} /> 
              <span>StudyBot.js</span> 
            </div>
          </div>
        )}
        <div 
          className={`file ${activeFile === 'Commands.js' ? 'active' : ''}`} 
          onClick={() => handleTabOpen('Commands.js')}
        >
          <FaTerminal className="file-icon" style={{color: "00ff1e"}} /> 
          <span>commands.sh</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
