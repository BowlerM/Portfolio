// src/components/Tabs.js
import React from 'react';
import { FaTimes } from 'react-icons/fa'; // For the close button icon

import "./Tabs.css"

const Tabs = ({ tabs, activeTab, setActiveTab, closeTab, setActiveFile}) => {
  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <div 
          key={index} 
          className={`tab ${activeTab === tab ? 'active' : ''}`} 
          onClick={() => {
            setActiveTab(tab)
            setActiveFile(tab)}
          }
        >
          {tab}
          <FaTimes className="close-icon" onClick={(e) => { 
            e.stopPropagation(); // Prevent activating the tab when closing
            setActiveFile("")
            closeTab(tab);
          }} />
        </div>
      ))}
    </div>
  );
};

export default Tabs;
