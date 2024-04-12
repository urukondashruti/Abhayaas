import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

// Styled Components
const ListItem = styled.li`
    margin-bottom: 20px;
`;

const BooksItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 40px;
        border: 1px solid #ccc;
        border-radius: 8px;
    }
`;

const BookImage = styled.img`
    max-width: 200px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 10px;
`;

const BooksText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        align-items: flex-start;
    }
`;

const BookTitle = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const BookPrice = styled.p`
    font-weight: bold;
    margin-bottom: 5px;
`;

const BookDescription = styled.p`
    max-width: 700px;
    margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    width: 150px;

    &:hover {
        background-color: #0056b3;
    }
`;

const RsIcon = styled.span`
    padding-top: 5px;
    padding-right: 10px;
`;

const BooksItem = (props) => {
    const { item } = props;
    const { name, price, imageUrl, description } = item;
    return (
        <ListItem>
            <BooksItemContainer>
                <div>
                    <BookImage src={imageUrl} alt="book" />
                </div>
                <BooksText>
                    <BookTitle>{name}</BookTitle>
                    <BookPrice>
                        <RsIcon>
                            <FontAwesomeIcon icon={faRupeeSign} className="rs-icon" />
                        </RsIcon>
                        {price}
                    </BookPrice>
                    <BookDescription>{description}</BookDescription>
                    <AddToCartButton>ADD TO CART</AddToCartButton>
                </BooksText>
            </BooksItemContainer>
            <hr className="divider" />
        </ListItem>
    );
}

export default BooksItem;
