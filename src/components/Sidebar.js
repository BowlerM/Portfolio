import { FaFolder, FaFileCode } from 'react-icons/fa';

import "./Sidebar.css"
import hashtag from "../assets/icons/hashtag.svg"

const Sidebar = ({ openTab, activeFile, setActiveFile}) => {
  const fileIconSize = 12

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
          {/* TODO: Use font awesome */}
          <img className="filetype" src={hashtag} width={fileIconSize} height={fileIconSize} alt=""></img> contact.css
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
