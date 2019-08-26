import React, { useState } from 'react';
import styled from 'styled-components';

const ContentWrapper= styled.div`
  min-width: 95px;
`;

const Button = styled.div`
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 25px;
  height: 21px;
  text-align: center;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;

const Decrease = styled(Button)`
  border-radius: 15px 0 0 15px;
`;

const Increase = styled(Button)`
  border-radius: 0 15px 15px 0;
`;

const Input = styled.input`
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 20px;
  height: 19px;
  
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ChangeCountInput = ({initialCount}) => {
    const [count, setCount] = useState(initialCount);

    const handleChange = (event) => {
        setCount(event.target.value)
    };

    const handleIncrease = () => setCount(count + 1);

    const handleDecrease = () => setCount(count - 1);

    return (
        <ContentWrapper>
            <Decrease onClick={handleDecrease}>-</Decrease>
            <Input type="number" value={count} onChange={handleChange} />
            <Increase onClick={handleIncrease}>+</Increase>
        </ContentWrapper>
    )
};

export default ChangeCountInput;