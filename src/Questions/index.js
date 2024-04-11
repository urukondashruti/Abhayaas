import React from 'react';
import './index.css'; // Import CSS file

const Questions = () => {
    return (
        <div className="questions-container">
            <div className="search-container">
                <input type="search" className="search-input" placeholder="Search"/>
                <p>or</p>
                <button className="ask-button">Ask a Question?</button>
            </div>
            <div className="question-card">
                <div className="question-details">
                    <h1 className="question-title">What are Heart Functions?</h1>
                    <p className="question-meta">Module: Heart</p>
                    <p className="question-meta">Date: 10/4/2024</p>
                </div>
                <div className="reply-button-container">
                    <button className="reply-button">VIEW REPLY</button>
                </div>
            </div>
        </div>
    );
}

export default Questions;
