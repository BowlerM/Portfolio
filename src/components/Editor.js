// src/components/Editor.js
import React from 'react';
import About from '../pages/About';
// import Projects from '../pages/Projects';
// import Contact from '../pages/Contact';
// import Resume from '../pages/Resume';
import Default from "../pages/Default"

import "./Editor.css";

const Editor = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "About.js":
        return <About />;
    //   case "Projects.js":
    //     return <Projects />;
    //   case "Contact.js":
    //     return <Contact />;
    //   case "Resume.js":
    //     return <Resume />;
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
