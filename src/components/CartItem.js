import React from 'react';
import styled from 'styled-components';
import ChangeCountInput from './widgets/common/ChangeCountInput';
import PropTypes from "prop-types";

const TableData = styled.td`
  font-size: 14px;
  font-weight: 300;
  width: 20%;
  padding: 10px;
  text-align: start;
  border-bottom: 1px solid black;
  
  :first-child {
    width: 40%
  }
`;

const RemoveButton = styled.button`
  font-size: 16px;
  text-align: center;
  background-color: grey;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const FlexWrapper= styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartItem = ({item, removeItem, addQuantity, subtractQuantity, inputQuantity}) => {

    const handleClick = () => removeItem(item.id);

    return (
        <tr>
            <TableData>{item.title}</TableData>
            <TableData>{`${item.price} USD`}</TableData>
            <TableData>
                <ChangeCountInput id={item.id} quantity={item.quantity} subtractQuantity={subtractQuantity} addQuantity={addQuantity} inputQuantity={inputQuantity} />
            </TableData>
            <TableData>
                <FlexWrapper>
                    {`${item.totalPrice} USD`}
                    <RemoveButton onClick={handleClick}>-</RemoveButton>
                </FlexWrapper>
            </TableData>
        </tr>
    )
};

CartItem.propTypes = {
    item: PropTypes.object,
    removeItem: PropTypes.func,
    addQuantity: PropTypes.func,
    subtractQuantity: PropTypes.func,
    inputQuantity: PropTypes.func,
};

export default CartItem;