import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import BooksItem from '../BooksItem';
import CoursesContext from '../Context/CoursesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Styled components
const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #f0f0f0;
  height: 40px;
  display: flex;
  flex-direction: row;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 30px;
  margin-left: 20px;
  margin-top: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: #f0f0f0;
`;

const BooksList = styled.ul`
  list-style: none;
  padding: 0;
`;


// Array of books data
const BooksList1 = [
  {
    id: '4',
    name: 'NEET BIOLOGY',
    price: "1200",
    imageUrl: 'https://www.universalbook.in/wp-content/uploads/2023/05/B12.png',
    description: "Highly recommended book for NEET aspirants as it contains detailed theory and is followed by “Exam Café” is there that provides detailed explanations of the topic-wise questions. Apart from that, every chapter ends with a concept map that gives insight into key concepts.",
  },
  {
    id: '3',
    name: 'NEET BIOLOGY',
    price: "1100",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NrOnTon2uRaaeJ9Z-D52Aq4o2CzmoHB0vw',
    description: 'This is an extremely useful book. Their revised edition features brand-new figures and tables, along with NCERT-based objective questions, making it a comprehensive study guide. It also includes unit-wise and previous years’ questions, giving you a well-rounded understanding of the material. ',
  },
  {
    id: '6',
    name: 'NEET PHYSICS',
    price: "900",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCdCc4Rk0vSHN7nRqH-uQoKIANRGFJNFWFA',
    description: 'NCERT Physics Class XI & Class XII, Concepts of Physics by H. C. Verma, Objective Physics By DC Pandey, Fundamentals of Physics by Halliday, Resnick and Walker,'
  },
  {
    id: '7',
    name: 'NEET CHEMISTRY',
    price: "1000",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRn5NzqO3p8J9EKsCFq370u4pgwEKEOJyaA',
    description: 'The NEET UG Chemistry section consists of 50 questions that cover organic, inorganic, and physical chemistry topics. It is recommended to have a very thorough understanding of these topics for success in your NEET chemistry exam.'
  }
];

// Functional component Products
const Products = () => (
  <CoursesContext.Consumer>
    {value => {
      const { searchvalue, onchangeSearch } = value;

      const changeSearch = event => {
        onchangeSearch(event.target.value);
      };

      const FilteredList = BooksList1.filter(each =>
        each.name.toLowerCase().includes(searchvalue.toLowerCase())
      );

      return (
        <ProductsContainer>
          <Header />
          <SearchContainer>
            <SearchIcon icon={faSearch} className="search-icon" />
            <SearchInput
              type="search"
              value={searchvalue}
              onChange={changeSearch}
              placeholder="Enter Subject"
            />
          </SearchContainer>
          <BooksList>
            {FilteredList.map(each => (
              <BooksItem key={each.id} item={each} />
            ))}
          </BooksList>
          <Footer />
        </ProductsContainer>
      );
    }}
  </CoursesContext.Consumer>
);

export default Products;