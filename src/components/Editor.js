// src/components/Editor.js
import React from 'react';
import About from '../pages/About';
import StudyBot from '../pages/projects/StudyBot';
import Contact from '../pages/Contact';
import CV from '../pages/CV';
import Default from "../pages/Default"
import Marr from "../pages/projects/Marr"
import Webscrapi from "../pages/projects/Webscrapi"

import "./Editor.css";

const Editor = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "ABOUT.md":
        return <About />;
      case "EduCord.js":
        return <StudyBot />;
      case "Marr.py":
        return <Marr />;
      case "Webscrapi.py":
        return <Webscrapi />;
      case "contact.css":
        return <Contact />;
      case "CV.pdf":
        return <CV />;
      default:
        return <Default />;
    }
  };

  return (
    <div className="editor">
      {renderContent()}
    </div>
  );
};

export default Editor;
