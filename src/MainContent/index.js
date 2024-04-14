import React from 'react'; // Importing React library
import { Carousel } from 'react-bootstrap'; // Importing Carousel component from 'react-bootstrap' library
import Header from '../Header'; // Importing Header component from local file
import Footer from '../Footer'; // Importing Footer component from local file
import Item from '../Item'; // Importing Item component from local file
import ReviewItems from '../ReviewItems'; // Importing ReviewItems component from local file
import './index.css'; // Importing CSS file for styling

// Array containing information about top students
const TopStudents = [
  {
    id: '1',
    name: 'Shravan Malhotra',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pL5d-IqElLzMADRUcMOsL2fcwapHGo1tPw',
    Marks: '99.9 Percentile',
  },
  {
    id:"2",
    name: 'Sneha Patil',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt64QIuF583LsYnmsc92XfZljjMZZiPVXMlA',
    Marks: '97.9 Percentile',
  },
  {
    id: "3",
    name: 'Suman Tiwari',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIv940EEUFrZBYPoVjUxUWNH6AsQ1LNS033Q',
    Marks: '98.9 Percentile',
  },
  {
    id: 
    "4",
    name: 'John Manon',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNHHubDSK_HQroqFpIz-dBGohwD6jLSAPmA',
    Marks: '98.9 Percentile',
  },
  {
    id: "5",
    name: 'rahul gohor',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1sgXixToq2MXKPGjAphcdSCeyE8E6atobg',
    Marks: '100 Percentile',
  },{
    id: "6",
    name: 'Sumit malhotra',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWCRP9sJvDg9iJKyujh-VWKKGNWQClJeQzA',
    Marks: '96.9 Percentile',
  },
  {
    id:"7",
    name: 'rama malhotra',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATqPj51MdWhmjc_qFkoufNiRSSH43YJ7NgQ',
    Marks: '96.2 Percentile',
  }
];

// Array containing reviews
const reviews = [
  {
    id: '11',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFl4eTlvWuatrrDtOXa78XOvx0lNZo3nn1bg',
    description:
      ' I found their course content really useful and a smart way forward to prepare for NEET exam. I use their course content from my desktop and access the videos as a slide mode for ease of preparation. ',
  },
  {
    id: '12',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUX8UheO6LFPqtRmloKQ7WtzhNuc9OMJhSg',
    description:
      'Karo Abhayaas is a platform for students as well as teachers. And it is quite affordable as compared to other platforms and offline coaching classes.',
  },
  {
    id: '13',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kVqpwaE8WuNQWvciJ1fs6pRzz57fNSgBZA',
    description:
      'I subscribed to their service. They have live-chat bots, which will take 1–2 hours to connect you to a real person on chat.',
  },
  {
    id: '14',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6tzZQAbcqYt4Dcn9tPatfn3wa8v7Sh0PJA',
    description:
      'I am very lucky because I am currently studying from “Lucky Sir “. He is the best teacher on this entire platform; he has a unique style of teaching.',
  },
  {
    id: '15',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYuDo1w5fzaiqv0blTOnpRa5wFlxNOXyI2Q',
    description:
      'Karo Abhayaas is an educational start-up that aims to create the world’s largest educational repository. It is doing so by empowering educators like us.',
  }
];

// MainContent component
const MainContent = () => {
  return (
    <>
      <Header /> {/* Rendering Header component */}
      <div className="containerMain"> {/* Main container */}
        <Carousel className="carouselCon"> {/* Carousel for images */}
          {/* Carousel items */}
          { /* 1st slide */}
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhG012ZoFCbHxF_jbJ_aiIpf8VZm7bl0yyMw"
              alt="First slide"
            />
          </Carousel.Item>
          {/* 2nd slide */}
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwbp6b16p1oxQCp5usFIpyHHSLBvLu0oJ2Q"
              alt="Second slide"
            />
          </Carousel.Item>
          {/* 3rd slide */}
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtz2znCSHN4_eAJ7Q6slp5tBg7aYilRlJ2A"
              alt="Third slide"
            />
          </Carousel.Item>
          {/* 4th slide */}
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMI3uxIYRIiUKw1KLbGOa1Gh5_qlANrvxMg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="top-students-container"> {/* Container for top students */}
          <h1 className="section-heading">Top Students</h1> {/* Heading */}
          <ul className="student-list"> {/* List of top students */}
            {/* Mapping through top students array and rendering each student */}
            {TopStudents.map((eachItem) => (
              <Item key={eachItem.id} item={eachItem} /> // Rendering Item component for each student
            ))}
          </ul>
        </div>
        <div className="reviews-container"> {/* Container for reviews */}
          <h1 className="section-heading">Reviews</h1> {/* Heading */}
          <ul className="reviews-list"> {/* List of reviews */}
            {/* Mapping through reviews array and rendering each review */}
            {reviews.map((eachItem) => (
              <ReviewItems key={eachItem.id} item={eachItem} /> // Rendering ReviewItems component for each review
            ))}
          </ul>
        </div>
      </div>
      <Footer /> {/* Rendering Footer component */}
    </>
  );
};

export default MainContent; // Exporting MainContent component
