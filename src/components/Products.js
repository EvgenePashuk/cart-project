import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const ProductsWrapper = styled.div`
  padding: 0 5px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Products = ({products}) => {

    const renderProducts = () => products.map(product => <Product product={product} />)

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