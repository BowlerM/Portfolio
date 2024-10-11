import React, { useState, useEffect, useRef } from 'react';
import pages from "../pages/PageList"
import themes from "../ThemeList"
import commandList from "./CommandList"

import "./Terminal.css"


const Terminal = ({setActiveFile, openTab, setTheme}) => {
    const [input, setInput] = useState(''); 
    const [history, setHistory] = useState([]); 
    const terminalRef = useRef(null); 
    const [showCursor, setShowCursor] = useState(true); 
    const inputRef = useRef(null);  
    const [suggestions, setSuggestions] = useState([]); // New state for suggestions



    const handleTabOpen = (file) => {
        file = file + pages[file]
        setActiveFile(file);
        openTab(file);
    }

  
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
        updateSuggestions(event.target.value); // Update suggestions based on input
    };

    const updateSuggestions = (input) => {
        const wordCount = input.split(" ").length;
        if (input && wordCount === 1) {
            const filteredSuggestions = commandList.filter(command => command.startsWith(input));
            setSuggestions(filteredSuggestions);
        }
        else if (input && wordCount === 2) {
            const command = input.split(" ")[0];
            const content = input.split(" ")[1];

            if(command === "theme"){
                const filteredSuggestions = themes.filter(theme => theme.startsWith(content));
                setSuggestions(filteredSuggestions);
            }
            else if (command === "open"){
                const filteredSuggestions = Object.keys(pages).filter(page => page.startsWith(content));
                setSuggestions(filteredSuggestions);
            }
            else{
                setSuggestions([]);
            }
        }
        else {
            setSuggestions([]); // Clear suggestions if input is empty
        }
    };

    const handleInputSubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default form submission
            setInput(''); // Clear input field
            processCommand(input);
        }
        else if (event.key === 'Tab') {
            event.preventDefault();
            // Handle autocomplete on Tab
            if (suggestions.length > 0) {
                const words = input.split(" ");
                const currentWordIndex = words.length - 1;

                words[currentWordIndex] = suggestions[0];
                setInput(words.join(" "));
                setSuggestions([]); 
            }
        }
    };

    const processCommand = (command) => {
        // Handle command logic
        const exec = command.split(" ")[0];
        let content = command.split(" ").slice(1);

        switch (exec) {
            case "echo":
                setHistory((prevHistory) => [...prevHistory, {"command": command, "usePrefix": true}]); 
                setHistory((prevHistory) => [...prevHistory, {"command": `${content.join(" ")}`, "usePrefix": false}]);
                break;
            case "open":
                if(!(content.toString() in pages)){
                    setHistory((prevHistory) => [...prevHistory, {"command": command, "usePrefix": true}]); 
                    setHistory((prevHistory) => [...prevHistory, {"command": "File doesn't exist!", "usePrefix": false}]);
                    return;
                }
                handleTabOpen(content.toString());
                break;
            case "theme":
                if(content.toString() === "--list"){
                    const allThemes = themes.join(", ")
                    setHistory((prevHistory) => [...prevHistory, {"command": command, "usePrefix": true}]); 
                    setHistory((prevHistory) => [...prevHistory, {"command": `Themes: ${allThemes}`, "usePrefix": false}]);
                    return;
                }
                if(!(themes.includes(content.toString()))){
                    setHistory((prevHistory) => [...prevHistory, {"command": command, "usePrefix": true}]); 
                    setHistory((prevHistory) => [...prevHistory, {"command": "Theme doesn't exist!", "usePrefix": false}]);
                    return;
                }
                if(content.toString() === "starry"){
                    setHistory((prevHistory) => [...prevHistory, {"command": command, "usePrefix": true}]); 
                    setHistory((prevHistory) => [...prevHistory, {"command": "Not practical... but pretty! (Shooting stars included)", "usePrefix": false}]);
                }
                setTheme(content.toString());
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
            {/* Block cursor */}
            {showCursor && (
                    <div className="block-caret" style={{ left: `${getCursorPosition()}px` }}></div>
            )} 
             {/* Display suggestions as greyed-out text */}
            {suggestions.length > 0 && (
                    <span className="autocomplete-suggestion" style={{ left: `${getCursorPosition()}px`}}>
                        {suggestions[0].substring(input.split(" ").slice(-1)[0].length)}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Terminal;
