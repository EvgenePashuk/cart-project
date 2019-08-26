import React from 'react';
import styled from 'styled-components';
import CartItem from "./CartItem";

const CartWrapper = styled.div`
  padding: 0 5px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 40px 20px;
  border: 1px solid black;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  font-size: 14px;
  font-weight: 400;
  width: 20%;
  padding: 10px;
  text-align: start;
  border-bottom: 1px solid black;
  
  :first-child {
    width: 40%
  }
`;

const TotalAmountBlock = styled.div`
  align-self: flex-end;
  font-size: 18px;
  font-weight: 400;
  padding: 0 20px;
`;

const Cart = ({addedItems, total, removeItem, addQuantity, subtractQuantity, inputQuantity}) => {

    const renderCartItems = () => addedItems.map(item => <CartItem key={item.id} item={item} removeItem={removeItem} addQuantity={addQuantity} subtractQuantity={subtractQuantity} inputQuantity={inputQuantity} />);

    return (
        <CartWrapper>
            <Title>Cart</Title>
            <CartContent>
                <Table>
                    <tbody>
                        <tr>
                            <TableHeader>Item</TableHeader>
                            <TableHeader>Price</TableHeader>
                            <TableHeader>Quantity</TableHeader>
                            <TableHeader>Total price</TableHeader>
                        </tr>
                        {renderCartItems()}
                    </tbody>
                </Table>
                <TotalAmountBlock>{`Total Amount: ${total} USD`}</TotalAmountBlock>
            </CartContent>
        </CartWrapper>
    )
};

export default Cart;