// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import Tabs from './components/Tabs';
import Terminal from './components/Terminal';
import './App.css';

const App = () => {
  //change to use proper filename
  const [tabs, setTabs] = useState(["About.js"]); // Initially open one tab
  const [activeTab, setActiveTab] = useState("About.js");
  const [activeFile, setActiveFile] = useState("About.js")
  const [defaultPage, setDefaultPage] = useState(true);

  // Open a new tab
  const openTab = (tab) => {
    if (!tabs.includes(tab)) {
      setTabs([...tabs, tab]);
    }
    setActiveTab(tab);
    setDefaultPage(false)
  };

  // Close an existing tab
  const closeTab = (tab) => {
    const newTabs = tabs.filter(t => t !== tab);
    setTabs(newTabs);

    if (newTabs.length === 0){
      setActiveTab("");
      setDefaultPage(true);
    }
    else if(activeTab === tab){
      setActiveTab(newTabs[0]);
      setActiveFile(newTabs[0]);
    }
  };

  return (
    <div className="vscode-container">
      <Sidebar openTab={openTab} activeFile={activeFile} setActiveFile={setActiveFile} /> {/* Pass the function to open tabs from Sidebar */}
      <div className="main-content">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} closeTab={closeTab} setActiveFile={setActiveFile} />
        <Editor activeTab={activeTab} />
      </div>
      <Terminal setActiveFile={setActiveFile} openTab={openTab}/>
    </div>
  );
};

export default App;
