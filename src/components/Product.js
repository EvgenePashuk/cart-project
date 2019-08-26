import React from 'react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
  flex: 0 0 23%;
  margin: 0 0 20px 0;
  padding: 10px 5px;
  border: 1px solid black;
  border-top: 2px solid black;
  
  :nth-child(3n + 1) {
    border-right: 2px solid black;
  }
  
  :nth-child(3n) {
    border-left: 2px solid black;
  }
  
  :nth-child(3n + 2) {
    margin: 0 calc((100% - 3*24% - 8px)/2) 20px calc((100% - 3*24% - 8px)/2);
  }
`;

const Img = styled.div`
  height: 100px;
  background-color: aqua; 
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  width: 100%;
  font-size: 12px;
  padding: 5px 0;
  font-weight: 600;
  background-color: #cccccc;
  border-radius: 10px;
  border: 1px solid #a8a8a8;
  cursor: pointer;
`;

const Product = ({product, addToCart}) => {
    const {id, title, price} = product;

    const handleClick = () => {
        addToCart(id);
    };

    return (
        <ProductWrapper>
            <Img />
            <Title>{title}</Title>
            <Price>{`${price} USD`}</Price>
            <AddButton onClick={handleClick}>Add to Cart</AddButton>
        </ProductWrapper>
    )
};

export default Product;