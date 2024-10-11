import React from 'react';

import "./Contact.css"


const Contact = () => {
    return (
        <div className="contact-content">
            <h2>Contacts</h2>
            <div className="json-block">
                <p className="json-declaration">{"{"}</p>
                <p className="json-line">
                    <span className="json-line-property">"github"</span>:  
                    <span className="speech-mark"> "</span>
                    <a className="json-line-link" href="https://github.com/BowlerM">BowlerM</a>
                    <span className="speech-mark">"</span>
                </p>
                <p className="json-line">
                    <span className="json-line-property">"linkedIn"</span>: 
                    <span className="speech-mark"> "</span>
                    <a className="json-line-link" href="https://www.linkedin.com/in/matthew-bowler-mb/">matthew-bowler-mb</a>
                    <span className="speech-mark">"</span>
                </p>
                <p className="json-line">
                    <span className="json-line-property">"email"</span>: 
                    <span className="speech-mark"> "</span>
                    <a className="json-line-link" href="mailto:mattbow55@googlemail.com">mattbow55@googlemail.com</a>
                    <span className="speech-mark">"</span>
                </p>
                <p className="json-declaration">{"}"}</p>
            </div>
        </div>
    )
}

export default Contact