import React, { useState, useEffect, useRef } from 'react';


import "./Terminal.css"

const Terminal = () => {
    const [input, setInput] = useState(''); 
    const [history, setHistory] = useState([]); 
    const terminalRef = useRef(null); 
    const [showCursor, setShowCursor] = useState(true); 
    const inputRef = useRef(null); 


    
    const getCursorPosition = () => {
        if (inputRef.current) {
            const text = inputRef.current.value;
            const span = document.createElement('span');
            span.style.visibility = 'hidden'; // Make it invisible
            span.style.whiteSpace = 'pre'; // Preserve whitespace
            span.style.font = getComputedStyle(inputRef.current).font; // Use the same font
            span.textContent = text; // Set text to span
            document.body.appendChild(span); // Add span to the DOM
            const cursorPosition = span.offsetWidth; // Get the width of the text
            document.body.removeChild(span); // Remove span after measuring
            return document.querySelector("span.terminal-prompt").getBoundingClientRect().width + cursorPosition + 10; // Return prompt width + text width
        }
        return 0; // Fallback
    };

    const handleInputChange = (event) => {
        setInput(event.target.value); // Update input state
    };

    const handleInputSubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default form submission
            setInput(''); // Clear input field
            // Process command here
            processCommand(input);
        }
    };

    const processCommand = (command) => {
        // Handle command logic

        switch (command.split(" ")[0]) {
            case "echo":
                const content = command.split(" ").slice(1);
                setHistory((prevHistory) => [...prevHistory, {"command": command, "usePrefix": true}]); 
                setHistory((prevHistory) => [...prevHistory, {"command": `${content.join(" ")}`, "usePrefix": false}]);
                break;
            default:
                setHistory((prevHistory) => [...prevHistory, {"command": command, "usePrefix": true}]); 
                break;
        }
    };

    useEffect(() => {
        // Scroll to the bottom of the terminal when new history is added
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }, [history]);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev); // Toggle cursor visibility every 500ms
        }, 500);
        
        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <div className="terminal" ref={terminalRef}>
            <div className="terminal-output">
                {history.map(({command, usePrefix}, index) => (
                    <div key={index}>
                        {usePrefix ? (
                            <>
                                <span className="terminal-user">user@Ubuntu</span>:
                                <span className="terminal-location">~/portfolio</span>
                                <span style={{ marginRight: '4px', marginLeft: '0' }}>$</span>
                            </>
                        ) : null}
                        {command}
                    </div> // Render command history
                ))}
            </div>
            <div className="terminal-input-container">
            <span className="terminal-prompt"> 
                <span className="terminal-user">user@Ubuntu</span>:
                <span className="terminal-location">~/portfolio</span>$ 
            </span>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleInputSubmit}
                className="terminal-input"
                ref={inputRef}
            />
            {showCursor && (
                    <div className="block-caret" style={{ left: `${getCursorPosition()}px` }}></div>
                )} {/* Block cursor */}
            </div>
        </div>
    );
};

export default Terminal;
