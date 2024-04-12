// Import the React library
import React from 'react';
// Import your CSS file for styling
import './index.css';

// Define a functional component called Tests
const Tests = () => {
    return (
        // Container for the tests section
        <div className="tests-container">
            {/* Container for search input and ask button */}
            <div className="search-container">
                {/* Search input field */}
                <input className="search-input" type="search" placeholder="Search"/>
                {/* Text indicating "or" */}
                <p className="or-text">or</p>
                {/* Button to ask a question */}
                <button className="ask-button">Ask a Question?</button>
            </div>
            {/* Container for test information */}
            <div className="test-info">
                {/* Container for details of the test */}
                <div className="test-details">
                    {/* Title of the test */}
                    <h1>WEEKLY TEST</h1>
                    {/* Module of the test */}
                    <p>Module: DNA</p>
                    {/* Date of the test */}
                    <p>Date: 10/4/2024</p>
                    {/* Marks of the test */}
                    <p>Marks: 100</p>
                    {/* Duration of the test */}
                    <p>Duration: 30 mins</p>
                </div>
                {/* Container for the start button */}
                <div className="start-button">
                    {/* Button to start the test */}
                    <button>START</button>
                </div>
            </div>
        </div>
    );
}

// Export the Tests component so it can be used elsewhere
export default Tests;