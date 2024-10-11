import React from 'react';
import { FaLink } from 'react-icons/fa';
import StudyBotExample from "../../assets/videos/StudyBotExample.mp4"

import "./StudyBot.css"

const StudyBot = () => {
    return (
        <div className="study-bot-content">
            <h2 className="header-title">Discord Study Bot (WIP) 
                <a className="header-link" href="https://github.com/BowlerM/Study-Bot" target="_blank" rel="noopener noreferrer">
                <FaLink />
                </a>
            </h2>

            <p>A discord study bot created in Node.js using the discord.js module along with MongoDB for storage.</p>
            <h3>Features</h3>
            <ul>
                <li>Reminders: User can set a set a reminder to remind them of something within a certain amount of minutes.</li>
                <li>Flashcards: User can create flashcards by providing a title and content. 
                    They can then get these cards by title or randomly through the bot along with other functions such as edit/delete</li>
            </ul>

            <h3>Example</h3>
            <video controls muted>
                <source src={StudyBotExample} type="video/mp4"/>
                Your browser does not support the video tag
            </video>
            <h3>Future additions</h3>
            <ul>
                <li>Fully fledge out the flashcard system to allow quizzes and using OpenAI to summarise documents into flashcards.</li>
                <li>Voice channel study sessions where the bot will join a designated voice channel for 30mins/1hr. It will remain there until
                    the time is up which then it will leave indicating the session is over.
                </li>
                <li>
                    Allow the bot to play a study playlist while in a study session.
                </li>
            </ul>
        </div>
    );
};

export default StudyBot;