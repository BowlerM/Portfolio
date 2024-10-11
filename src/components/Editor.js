import React, {useState, useEffect} from 'react';
import About from '../pages/About';
import StudyBot from '../pages/projects/StudyBot';
import Contact from '../pages/Contact';
import CV from '../pages/CV';
import Default from "../pages/Default"
import Marr from "../pages/projects/Marr"
import Webscrapi from "../pages/projects/Webscrapi"
import Commands from "../pages/Commands"

import "./Editor.css";

const Editor = ({ activeTab, theme }) => {
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
      case "contact.json":
        return <Contact />;
      case "CV.pdf":
        return <CV />;
      case "commands.sh":
        return <Commands />;
      default:
        return <Default />;
    }
  };
  
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars only once when the component mounts
    const generatedStars = Array.from({ length: 400 }).map(() => {
      const size = Math.random() * 2.6 + 1;
      return {
        top: Math.random() * 100, // percentage
        left: Math.random() * 100, // percentage
        width: size,
        height: size,
        animationDelay: Math.random() * 4, // seconds
      };
    });
    setStars(generatedStars);
  }, []); // Empty dependency array ensures this runs only once


  const [showShootingStar, setShowShootingStar] = useState(false);
  const [shootingStarPosition, setShootingStarPosition] = useState({ top: 0, left: 0 });
  useEffect(() => {
    // Randomly trigger a shooting star every 5-10 seconds
    const interval = setInterval(() => {
      // Set random top and left positions for the shooting star
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      setShootingStarPosition({ top, left });

      // Show the shooting star
      setShowShootingStar(true);
      // Hide the shooting star after 1 second
      setTimeout(() => setShowShootingStar(false), 1000);
    }, Math.random() * 5000 + 15000);  

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  return (
    <div className="editor">
      {theme === "starry" && (
          <div className="starry-background">
          {stars.map((star, index) => (
            <div
              key={index}
              className="star"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: `${star.width}px`,
                height: `${star.height}px`,
                animationDelay: `${star.animationDelay}s`,
              }}
            ></div>
          ))}
          {showShootingStar && (
              <div
                className="shooting-star"
                style={{
                  top: `${shootingStarPosition.top}%`,
                  left: `${shootingStarPosition.left}%`,
                }}
              ></div>
            )}
          </div>
      )}
      {renderContent()}
    </div>
  );
};

export default Editor;
