import React, { useState } from 'react';
import { FaFolder, FaJsSquare, FaAngleUp, FaAngleDown, FaTerminal, FaFolderOpen, FaInfoCircle, FaFilePdf, FaPython, FaFileCode } from 'react-icons/fa';

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
          className={`file ${activeFile === 'contact.json' ? 'active' : ''}`} 
          onClick={() => handleTabOpen('contact.json')}
        >
          <FaFileCode className="file-icon" style={{color: "#FFD43B"}} />
          <span>contact.json</span>
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
              className={`file ${activeFile === 'EduCord.js' ? 'active': ''}`}
              onClick={() => handleTabOpen('EduCord.js')}
            >
              <FaJsSquare className="file-icon" style={{color: "#FFD43B"}} /> 
              <span>EduCord.js</span> 
            </div>
            <div 
              className={`file ${activeFile === 'Marr.py' ? 'active': ''}`}
              onClick={() => handleTabOpen('Marr.py')}
            >
              <FaPython className="file-icon" style={{color: "#519ABA"}} /> 
              <span>Marr.py</span> 
            </div>
            <div 
              className={`file ${activeFile === 'Webscrapi.py' ? 'active': ''}`}
              onClick={() => handleTabOpen('Webscrapi.py')}
            >
              <FaPython className="file-icon" style={{color: "#519ABA"}} /> 
              <span>Webscrapi.py</span> 
            </div>
          </div>
        )}
        <div 
          className={`file ${activeFile === 'commands.sh' ? 'active' : ''}`} 
          onClick={() => handleTabOpen('commands.sh')}
        >
          <FaTerminal className="file-icon" style={{color: "#00ff1e"}} /> 
          <span>commands.sh</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
