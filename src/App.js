import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Cart from './components/Cart';
import Products from './components/Products';
import { addToCart, removeItem, addQuantity, subtractQuantity, inputQuantity } from './components/actions/cartActions';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 768px;
    margin: 50px auto 0;
`;

const CartWrapper = styled.div`
  margin-bottom: 30px;
`;

const ProductsWrapper = styled.div`
  margin-bottom: 30px;
`;

const App = ({products, addedItems, total, addToCart, removeItem, addQuantity, subtractQuantity, inputQuantity }) => {
  return (
      <ContentWrapper>
          <CartWrapper>
              <Cart addedItems={addedItems} total={total} removeItem={removeItem} addQuantity={addQuantity} subtractQuantity={subtractQuantity} inputQuantity={inputQuantity}/>
          </CartWrapper>
          <ProductsWrapper>
              <Products products={products} addToCart={addToCart} />
          </ProductsWrapper>
      </ContentWrapper>
  )
};

const mapStateToProps = (state)=>{
    return {
        products: state.products,
        addedItems: state.addedItems,
        total: state.total
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        addToCart: ( id ) => { dispatch(addToCart(id)) },
        removeItem: ( id ) => { dispatch(removeItem(id)) },
        addQuantity: ( id ) => { dispatch(addQuantity(id)) },
        subtractQuantity: ( id ) => { dispatch(subtractQuantity(id)) },
        inputQuantity: ( id, quantity ) => { dispatch(inputQuantity(id, quantity)) }
    }
};

App.propTypes = {
    products: PropTypes.array,
    addedItems: PropTypes.array,
    total: PropTypes.number,
    addToCart: PropTypes.func,
    removeItem: PropTypes.func,
    addQuantity: PropTypes.func,
    subtractQuantity: PropTypes.func,
    inputQuantity: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
