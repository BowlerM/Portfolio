import React from 'react';

import "./Contact.css"


const Contact = () => {
    return (
        <div className="contact-content">
            <h2>Contacts</h2>
            <div className="css-block">
                <p className="css-declaration"><span className="css-declaration-span">.links</span> {"{"}</p>
                <p className="css-line"><span className="css-line-property">github</span>: <a className="css-line-link" href="https://github.com/BowlerM">BowlerM</a>;</p>
                <p className="css-line"><span className="css-line-property">linkedIn</span>: <a className="css-line-link" href="https://www.linkedin.com/in/matthew-bowler-mb/">matthew-bowler-mb</a>;</p>
                <p className="css-line"><span className="css-line-property">email</span>: <a className="css-line-link" href="mailto:mattbow55@googlemail.com">mattbow55@googlemail.com</a>;</p>
                <p className="css-declaration">{"}"}</p>
            </div>
        </div>
    )
}

export default Contact