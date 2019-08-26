import React from 'react';
import styled from 'styled-components';
import ChangeCountInput from './widgets/common/ChangeCountInput';

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

const CartItem = () => {
    return (
        <tr>
            <TableData>Produce name</TableData>
            <TableData>50 USD</TableData>
            <TableData>
                <ChangeCountInput initialCount={1} />
            </TableData>
            <TableData>100 USD</TableData>
        </tr>
    )
};

export default CartItem;