import React from "react";

import "./Commands.css"

const Commands = () => {

    return (
        <div className="commands-content">
            <h2 className="header-title">For The Terminal Below</h2>
            <h3 className="command-name">echo {"<"}message{">"}</h3>
            <p className="command-description">Repeats the message back to the user.</p>

            <h3 className="command-name">open {"<"}file{">"}</h3>
            <p className="command-description" style={{marginBottom: 0}}>Opens one of the sections from the sidebar (case sensitive) e.g.</p>
            <ul>
                <li>open contact</li>
                <li>open CV</li>
                <li>open EduCord</li>
            </ul>

            <h3 className="command-name">theme {"<"}theme{">"}</h3>
            <p className="command-description" style={{marginBottom: 0}}>Sets the theme of the website (case sensitive)</p>
            <ul>
                <li>use <span style={{fontWeight: "bold", fontStyle: "italic"}}>theme --list</span> to list all the themes</li>
            </ul>
        </div>
    );
}

export default Commands

