import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import ClassesItem from '../ClassesItem';

// Styled components
const Container = styled.div`
 
`;

const HeaderContainer = styled(Header)`
  background-color: #007bff;
  color: white;
  padding: 10px 0;
  text-align: center;
`;

const ClassesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:30px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;
// Array of classes data
const ClassesList1 = [
  {
    id: '4',
    name: 'HEART THEORY',
    videoUrl: 'bXGPCb0kkso',
    description: "This video lecture covers class 11th topic Heart of Biology for preparation of NEET exam by top faculty Also you can download free class notes of Biology for NEET preparation at our website https://goo.gl/LYMLZ3 Get Online coaching for JEE, NEET and CBSE, also get online study material, test series, doubt clearing sessions, sample papers, solutions etc. at http://bit.ly/2tFIUfX. prepare by top faculties, email- support@misostudy.com or call us at 8929 803 804 for any query or doubt related questions for NEET | CBSE | IIT-JEE Preparation.",
  },
  {
    id: '3',
    name: '90 Days Strategy',
    videoUrl: '7wt-D0-sDNM',
    description: 'The channel will give you all the information you need to build a thorough study plan, exam preparation, strategy, and motivation, including everything from the basics to the nuances of each JEE and NEET topic. ',
  },
  {
    id: '6',
    name: 'ANIMAL KINGDOM',
    videoUrl: 'dGAsJBs8jps',
    description: 'Get ready to accelerate your NEET preparation with our 45 Days crash course a comprehensive series designed to boost your understanding and mastery of key concepts, ensuring your selection the upcoming NEET 2024 exams. In this video, Seep Pahuja discusses Animal Kingdom for NEET 2024.'
  },
  {
    id: '7',
    name: 'Zoology',
    videoUrl: 'FfYmLuyJubk',
    description: 'The NEET UG Zoology section consists of 50 questions that cover organic, inorganic, and physical Zoology topics. It is recommended to have a very thorough understanding of these topics for success in your NEET Zoology exam.'
  }
];

// Functional component Classes
const Classes = () => {
  return (
    <Container>
      <HeaderContainer />
      <ClassesList>
        {ClassesList1.map(each => (
          <ClassesItem key={each.id} item={each} />
        ))}
      </ClassesList>
      <Paragraph>1 2 3 4 5</Paragraph>
    </Container>
  );
};

export default Classes;