import React from "react";
import Callback from "../Callback";
import Header from '../Header'
import "./index.css"; // Import CSS file

const About = () => {
    return (
        <div>
            <Header/>
        <div className="about-container">
            <div className="about-section">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViR4Ikcttr0--_ZcP0RILcvfyTfJwL2vk2g" alt="NEET preparation" />
                <p>For ambitious medical students in India, picking the best NEET (National Eligibility cum Entrance Test) preparation centre is a crucial choice. Being admitted to the best medical and dental universities in the nation requires passing one of the most difficult entrance tests, known as NEET. A quality coaching centre may offer insightful advice, useful study materials, and a methodical approach to aid in your success. We will discuss the important criteria you should take into account when choosing the ideal NEET Coaching centres in this article. Knowing which online coaching is best for NEET will help  Making a well-informed decision will not only help you save time and money, but it will also greatly increase your chances of realizing your aspirations for a future in medicine.</p>
            </div>
            <div className="about-section">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPcAM4z9fxzCxStbo0KC1lyxfPjeAR7nnzw" alt="Contact us" />
                <div>
                    <Callback />
                </div>
            </div>
        </div>
        </div>
    )
}

export default About;