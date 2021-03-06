import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Img = styled.div`
  position: relative;
  height: 100px;
  overflow: hidden;
  border: 1px solid black;
  margin-bottom: 10px;
  
   &::before, &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    background: #000;
  }
  
  &::before {
    transform: rotate(26deg);
  }
  
  &::after {
    transform: rotate(-26deg);
  }
`;

const ProductWrapper = styled.div`
  padding: 10px 5px;
  border: 1px solid black;
  border-top: 2px solid black;
  
  :nth-child(3n + 1) {
    border-right: 2px solid black;
    
    ${Img} {
      border-right: 2px solid black;
      border-bottom: 2px solid black;
    }
  }
  
  :nth-child(3n + 2) {
    ${Img} {
      border-bottom: 2px solid black;
    }
  }
  
  :nth-child(3n) {
    border-left: 2px solid black;
    
    ${Img} {
      border-right: 2px solid black;
      border-bottom: 2px solid black;
      border-left: 2px solid black;
    }
  }
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  width: 100%;
  font-size: 12px;
  padding: 7px 0;
  font-weight: 700;
  background-color: #cccccc;
  border-radius: 10px;
  border: 1px solid #a8a8a8;
  cursor: pointer;
`;

const Product = ({product, addToCart}) => {
    const {id, title, price} = product;

    const handleClick = () => addToCart(id);

    return (
        <ProductWrapper>
            <Img />
            <Title>{title}</Title>
            <Price>{`${price} USD`}</Price>
            <AddButton onClick={handleClick}>Add to Cart</AddButton>
        </ProductWrapper>
    )
};

Product.propTypes = {
    product: PropTypes.object,
    addToCart: PropTypes.func,
};

export default Product;