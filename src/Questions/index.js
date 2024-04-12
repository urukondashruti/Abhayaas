import React from 'react'; // Importing React library
import './index.css'; // Importing CSS file for styling

// Functional component Questions
const Questions = () => {
    return (
        <div className="questions-container"> {/* Container for questions */}
            <div className="search-container"> {/* Container for search input and ask button */}
                <input type="search" className="search-input" placeholder="Search"/> {/* Search input field */}
                <p>or</p> {/* Text "or" */}
                <button className="ask-button">Ask a Question?</button> {/* Ask a question button */}
            </div>
            <div className="question-card"> {/* Container for individual question */}
                <div className="question-details"> {/* Container for question details */}
                    <h1 className="question-title">What are Heart Functions?</h1> {/* Question title */}
                    <p className="question-meta">Module: Heart</p> {/* Question module */}
                    <p className="question-meta">Date: 10/4/2024</p> {/* Question date */}
                </div>
                <div className="reply-button-container"> {/* Container for reply button */}
                    <button className="reply-button">VIEW REPLY</button> {/* View reply button */}
                </div>
            </div>
        </div>
    );
}

export default Questions; // Exporting Questions component
