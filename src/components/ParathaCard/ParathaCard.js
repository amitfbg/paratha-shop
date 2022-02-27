import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Toppings from "../toppings/Toppings";
import MyModal from "./../Modal/index";
import { parathaToppings } from "../../utils";
import Counter from "../Counter/Counter";
import parImg from "../../assets/images/paratha1.jpg";

const Container = styled.div`
  height: 20rem;
  width: 20rem;
  padding: 1rem;
  background-color: #f6f8fa;
  margin: 0.5rem;
  border: solid 1px #f6f8fa;
  box-shadow: 1px 1px 6px #d3d3d3;
`;
const ContainerTop = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const ContainerCenter = styled.div`
  height: 15rem;
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  margin: 0;
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: 100%;
    transform: translate(-50%, -50%);
    object-fit: contain;
  }
`;
const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;
const AddToCart = styled.div`
  color: #000000;
  min-width: 3rem;
  font-size: 18px;
  font-weight: bold;
  background-color: #8fcdf4;
  padding: 0.5rem;
  cursor: pointer;
  line-height: 1;
  text-align: center;
  border-radius: 0.5rem;
`;

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
        <ContainerCenter>
          <img src={parImg} />
        </ContainerCenter>
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
