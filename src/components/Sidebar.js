import React, { useState } from 'react';
import { FaFolder, FaAngleUp, FaAngleDown, FaFolderOpen } from 'react-icons/fa';
import { files, projectFiles } from './FileConfig.js'; 

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

  const renderFile = (file) => (
    <div
      key={file.name}
      className={`file ${activeFile === file.name ? 'active' : ''}`}
      onClick={() => handleTabOpen(file.name)}
    >
      {file.icon} <span>{file.name}</span>
    </div>
  );

  return (
    <div className="sidebar">
      <h3 className="sidebar-header">Matthew Bowler</h3>
      <hr />
      <div className="files">
        {files.map(renderFile)}

        <div
          className={`file ${isProjectsOpen && activeFolder === 'Projects' && !activeFile ? 'active' : ''}`}
          onClick={toggleProjectsDropdown}
        >
          {isProjectsOpen
            ? <FaFolderOpen className="file-icon" color="#ffd665" />
            : <FaFolder className="file-icon" color="#ffd665" />}
          <span>Projects</span>
          {isProjectsOpen
            ? <FaAngleUp className="dropdown-icon" />
            : <FaAngleDown className="dropdown-icon" />}
        </div>

        {isProjectsOpen && (
          <div className="dropdown-content">
            {projectFiles.map(renderFile)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
