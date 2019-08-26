import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const ProductsWrapper = styled.div`
  padding: 0 5px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10%;
  grid-row-gap: 10px;
`;

const Products = ({products, addToCart}) => {

    const renderProducts = () => products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />);

    return (
        <ProductsWrapper>
            <Title>Products</Title>
            <ListWrapper>
                {renderProducts()}
            </ListWrapper>
        </ProductsWrapper>
    )
};

export default Products;