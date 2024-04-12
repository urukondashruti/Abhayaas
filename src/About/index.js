// About.js
import React from "react";
import styled from "styled-components";
import Callback from "../Callback";
import Header from "../Header";

// Styled Components
const AboutContainer = styled.div`
  margin: 20px;
`;

const AboutSection = styled.div`
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const CallbackContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
`;

const Title = styled.h1`
  text-align: center;
  font-family: Arial, sans-serif;
  color: #333;
`;

const About = () => {
  return (
    <AboutContainer>
      <Header />
      <div className="about-container">
        <AboutSection>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViR4Ikcttr0--_ZcP0RILcvfyTfJwL2vk2g" alt="NEET preparation" />
          <p>For ambitious medical students in India, picking the best NEET (National Eligibility cum Entrance Test) preparation centre is a crucial choice. Being admitted to the best medical and dental universities in the nation requires passing one of the most difficult entrance tests, known as NEET. A quality coaching centre may offer insightful advice, useful study materials, and a methodical approach to aid in your success. We will discuss the important criteria you should take into account when choosing the ideal NEET Coaching centres in this article. Knowing which online coaching is best for NEET will help Making a well-informed decision will not only help you save time and money, but it will also greatly increase your chances of realizing your aspirations for a future in medicine.</p>
        </AboutSection>
        <AboutSection>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPcAM4z9fxzCxStbo0KC1lyxfPjeAR7nnzw" alt="Contact us" />
          <CallbackContainer>
            <Title>Contact Us</Title>
            <Callback />
          </CallbackContainer>
        </AboutSection>
      </div>
    </AboutContainer>
  );
};

export default About;
