import React from 'react';

import "./CV.css"

const CV = () => {

    return (
        <div className="cv-content">
            <h2>My CV</h2>
            <div className="cv-container">
                <div className="cv-file">
                    <iframe src="/Portfolio/cv.pdf" title="CV"></iframe>
                </div>
            </div>
        </div>
    );
};

export default CV;
