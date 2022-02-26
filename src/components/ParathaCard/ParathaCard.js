import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Toppings from "../toppings/Toppings";
import MyModal from "./../Modal/index";
import { parathaToppings } from "../../utils";
import Counter from "../Counter/Counter";

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
const AddToCart = styled.div``;

const ParathaCard = ({ details, isEdit }) => {
  const dispatch = useDispatch();
  const toppings = parathaToppings[details] || [];
  const data = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [checkedState, setCheckedState] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const foundIdx = data.items?.findIndex((curr) => curr?.id === details);
    let newAddOnList = [];
    let addOnList = [];
    if (foundIdx !== -1) {
      addOnList = data.items?.[foundIdx].top;
      setCount(data.items?.[foundIdx].count);
    } else {
      setCount(0);
    }
    newAddOnList = toppings.map((curr) =>
      addOnList.includes(curr) ? true : false
    );
    setCheckedState(newAddOnList);
  }, [data]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const handleAdd = () => {
    const top = checkedState.reduce((acc, curr, idx) => {
      if (curr) {
        acc.push(toppings[idx]);
      }
      return acc;
    }, []);

    const payload = { id: details, top, count: 1 };

    dispatch({ type: "ADD_TO_CART", payload: payload });
    setOpen(false);
  };

  const getContent = () => {
    if (isEdit) {
      return <AddToCart onClick={() => setOpen(true)}>Edit</AddToCart>;
    }
    return (
      <Container>
        <ContainerTop>{details}</ContainerTop>
        <ContainerBottom>
          {count === 0 ? (
            <AddToCart onClick={() => setOpen(true)}>Add to cart</AddToCart>
          ) : (
            <Counter count={count} id={details} />
          )}
        </ContainerBottom>
      </Container>
    );
  };
  return (
    <>
      {getContent()}
      <MyModal
        title="Add Toppings"
        open={open}
        buttonText="Save"
        onClose={() => setOpen(false)}
        onSubmit={() => handleAdd()}
      >
        <Toppings
          checkedState={checkedState}
          handleOnChange={handleOnChange}
          toppings={toppings}
        />
      </MyModal>
    </>
  );
};

export default ParathaCard;
