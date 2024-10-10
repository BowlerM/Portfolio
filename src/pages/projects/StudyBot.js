import React from 'react';
import { FaLink } from 'react-icons/fa';

import "./StudyBot.css"

const StudyBot = () => {
    return (
        <div className="study-bot-content">
            <h2 className="header-title">Discord Study Bot <a className="header-link" href="https://github.com/BowlerM/Study-Bot" target="_blank" rel="noopener noreferrer"><FaLink></FaLink></a></h2>
        </div>
    );
};

export default StudyBot;