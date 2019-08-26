import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Cart from './components/Cart';
import Products from './components/Products';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    margin: 50px auto 0;
`;

const CartWrapper = styled.div`
  margin-bottom: 30px;
`;

const ProductsWrapper = styled.div`
  margin-bottom: 30px;
`;

const App = ({products}) => {
  return (
      <ContentWrapper>
          <CartWrapper>
              <Cart />
          </CartWrapper>
          <ProductsWrapper>
              <Products products={products} />
          </ProductsWrapper>
      </ContentWrapper>
  )
};

const mapStateToProps = (state)=>{
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(App)
