import React from 'react';
import { Carousel } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import Item from '../Item';
import ReviewItems from '../ReviewItems';
import './index.css';

const TopStudents = [
  {
    id: 'c22777fe-f72e-11eb-9a03-0242ac130003',
    name: 'Shravan Malhotra',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pL5d-IqElLzMADRUcMOsL2fcwapHGo1tPw',
    Marks: '99.9 Percentile',
  },
  {
    id: 'c2277a74-f72e-11eb-9a03-0242ac130003',
    name: 'Sneha Patil',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt64QIuF583LsYnmsc92XfZljjMZZiPVXMlA',
    Marks: '97.9 Percentile',
  },
  {
    id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
    name: 'Suman Tiwari',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIv940EEUFrZBYPoVjUxUWNH6AsQ1LNS033Q',
    Marks: '98.9 Percentile',
  },
  {
    id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
    name: 'John Manon',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNHHubDSK_HQroqFpIz-dBGohwD6jLSAPmA',
    Marks: '98.9 Percentile',
  },
  {
    id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
    name: 'rahul gohor',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1sgXixToq2MXKPGjAphcdSCeyE8E6atobg',
    Marks: '100 Percentile',
  },{
    id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
    name: 'Sumit malhotra',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWCRP9sJvDg9iJKyujh-VWKKGNWQClJeQzA',
    Marks: '96.9 Percentile',
  },
  {
    id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
    name: 'rama malhotra',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATqPj51MdWhmjc_qFkoufNiRSSH43YJ7NgQ',
    Marks: '96.2 Percentile',
  }
];

const reviews = [
  {
    id: 'c22777fe-f72e-11eb-9a03-0242ac130003',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFl4eTlvWuatrrDtOXa78XOvx0lNZo3nn1bg',
    description:
      ' I found their course content really useful and a smart way forward to prepare for NEET exam. I use their course content from my desktop and access the videos as a slide mode for ease of preparation. ',
  },
  {
    id: 'c2277a74-f72e-11eb-9a03-0242ac130003',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUX8UheO6LFPqtRmloKQ7WtzhNuc9OMJhSg',
    description:
      'Karo Abhayaas is a platform for students as well as teachers. And it is quite affordable as compared to other platforms and offline coaching classes.',
  },
  {
    id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kVqpwaE8WuNQWvciJ1fs6pRzz57fNSgBZA',
    description:
      'I subscribed to their service. They have live-chat bots, which will take 1–2 hours to connect you to a real person on chat.',
  },
  {
    id: 'c2277c2c-f72e-11eb-9a03-0242ac130004',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6tzZQAbcqYt4Dcn9tPatfn3wa8v7Sh0PJA',
    description:
      'I am very lucky because I am currently studying from “Lucky Sir “. He is the best teacher on this entire platform; he has a unique style of teaching.',
  },
  {
    id: 'c2277cea-f72e-11eb-9a03-0242ac130003',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYuDo1w5fzaiqv0blTOnpRa5wFlxNOXyI2Q',
    description:
      'Karo Abhayaas is an educational start-up that aims to create the world’s largest educational repository. It is doing so by empowering educators like us.',
  }
];

const MainContent = () => {
  return (
    <>
      <Header />
      <div className="containerMain">
      <Carousel className="carouselCon">
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhG012ZoFCbHxF_jbJ_aiIpf8VZm7bl0yyMw"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwbp6b16p1oxQCp5usFIpyHHSLBvLu0oJ2Q"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtz2znCSHN4_eAJ7Q6slp5tBg7aYilRlJ2A"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMI3uxIYRIiUKw1KLbGOa1Gh5_qlANrvxMg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="top-students-container">
        <h1 className="section-heading">Top Students</h1>
        <ul className="student-list">
          {TopStudents.map((eachItem) => (
            <Item key={eachItem.id} item={eachItem} />
          ))}
        </ul>
      </div>
      <div className="reviews-container">
        <h1 className="section-heading">Reviews</h1>
        <ul className="reviews-list">
          {reviews.map((eachItem) => (
            <ReviewItems key={eachItem.id} item={eachItem} />
          ))}
        </ul>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default MainContent;
