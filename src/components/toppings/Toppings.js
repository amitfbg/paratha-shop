/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
`;
const Wrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const Name = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Toppings = ({ checkedState, handleOnChange, toppings }) => {
  return (
    <Container>
      {toppings.map((label, index) => {
        return (
          <Wrap key={index}>
            <Name>{label}</Name>
            <div>
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={label}
                value={label}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
            </div>
          </Wrap>
        );
      })}
    </Container>
  );
};

export default Toppings;
