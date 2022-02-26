import React, { useState } from "react";
import styled from "styled-components";
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

const ParathaCard = ({ details }) => {
  const { id, label, price } = details;
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen(!open);
  };
  return (
    <Container key={id}>
      <ContainerTop>
        <StyledIcon>{label}</StyledIcon>
      </ContainerTop>
      <ContainerBottom onClick={handleChange}>Add to cart</ContainerBottom>

      <MyModal
        title="Add Toppings"
        open={open}
        buttonText="Save"
        onClose={() => setOpen(false)}
      >
        <Toppings />
      </MyModal>
    </Container>
  );
};

export default ParathaCard;
