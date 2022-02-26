import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Toppings from "../toppings/Toppings";
import MyModal from "./../Modal/index";

const Container = styled.div`
  height: 15rem;
  width: 15rem;
  background-color: aliceblue;
  margin: 0.5rem;
`;
const ContainerTop = styled.div`
  height: 12rem;
  width: 12rem;
`;
const ContainerBottom = styled.div``;
const StyledIcon = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 3.8rem;
    height: 3.8rem;
  }
`;

const toppings = ["A", "B", "C"];

const ParathaCard = ({ details }) => {
  const { id, label } = details;
  const data = useSelector((state) => state.cart).items;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [checkedState, setCheckedState] = useState();
  const [count, setCount] = useState(data?.[id]?.count || 0);

  useEffect(() => {
    const selectedTop = data.findIndex((curr) => curr?.id === id);
    let inputStatus = [];
    if (selectedTop !== -1) {
      inputStatus = data[selectedTop].top;
    }
    inputStatus = toppings.map((curr) =>
      inputStatus.includes[curr] ? true : false
    );
    setCheckedState(inputStatus);
  }, [data, id]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const handleChange = () => {
    setOpen(!open);
  };

  const handleAdd = () => {
    const top = checkedState.reduce((acc, curr, idx) => {
      if (curr) {
        acc.push(toppings[idx]);
      }
      return acc;
    }, []);
    const payload = { id, top, count: 1 };
    dispatch({ type: "ADD_TO_CART", payload: payload });
    setOpen(false);
  };
  return (
    <Container key={id}>
      <ContainerTop>
        <StyledIcon>{label}</StyledIcon>
      </ContainerTop>
      {count === 0 ? (
        <ContainerBottom onClick={handleChange}>Add to cart</ContainerBottom>
      ) : (
        <div>
          <span>ADD</span>
          {count}
          <span>Remove</span>
        </div>
      )}

      <MyModal
        title="Add Toppings"
        open={open}
        buttonText="Save"
        onClose={() => setOpen(false)}
        onSubmit={() => handleAdd()}
      >
        <Toppings
          id={id}
          checkedState={checkedState}
          handleOnChange={handleOnChange}
          toppings={toppings}
        />
      </MyModal>
    </Container>
  );
};

export default ParathaCard;
