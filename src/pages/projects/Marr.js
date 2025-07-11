import React from "react";
import { FaLink } from "react-icons/fa";
import MarrExample from "../../assets/videos/MarrExample.mp4"

import "./Marr.css"

const Marr = () =>{
    
    return(
        <div className="marr-content">
            <h2 className="header-title">Basic Text Based Social Media Site 
                <a className="header-link" href="https://github.com/BowlerM/Marr" target="_blank" rel="noopener noreferrer">
                <FaLink />
                </a>
            </h2>
            <p>A basic text based social media site for my university's Web Applications module. Built using Flask 
                with jinja templates along with a basic sqlite database for storage.
            </p>
            
            <h3>Features</h3>
            <ul>
                <li>User account creation, including account editing and deletion.</li>
                <li>Post creation, editing and deletion.</li>
                <li>Ability to like other users posts which saves them for later viewing.</li>
            </ul>

            <h3>Demonstration</h3>
            <video controls muted>
                <source src={MarrExample} type="video/mp4"/>
                Your browser does not support the video tag
            </video>


        </div>
    );
}

export default Marr;