// src/App.js
import React, { useState, useEffect} from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import Tabs from './components/Tabs';
import Terminal from './components/Terminal';
import './App.css';
import "./themes.css"

const App = () => {
  //change to use proper filename
  const [tabs, setTabs] = useState(["ABOUT.md"]); // Initially open one tab
  const [activeTab, setActiveTab] = useState("ABOUT.md");
  const [activeFile, setActiveFile] = useState("ABOUT.md")
  const [defaultPage, setDefaultPage] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "default";
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
        <Editor activeTab={activeTab} theme={theme}/>
      </div>
      <Terminal setActiveFile={setActiveFile} openTab={openTab} setTheme={setTheme}/>
    </div>
  );
};

export default App;
