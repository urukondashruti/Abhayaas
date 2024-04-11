import React from 'react';
import './index.css'; // Import your CSS file

const Tests = () => {
    return (
        <div className="tests-container">
            <div className="search-container">
                <input className="search-input" type="search" placeholder="Search"/>
                <p className="or-text">or</p>
                <button className="ask-button">Ask a Question?</button>
            </div>
            <div className="test-info">
                <div className="test-details">
                    <h1>WEEKLY TEST</h1>
                    <p>Module: DNA</p>
                    <p>Date: 10/4/2024</p>
                    <p>Marks: 100</p>
                    <p>Duration: 30 mins</p>
                </div>
                <div className="start-button">
                    <button>START</button>
                </div>
            </div>
        </div>
    );
}

export default Tests;
