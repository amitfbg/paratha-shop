import React, { useState } from "react";
import styled from "styled-components";
import Cart from "../Cart/Cart";
import MyModal from "../Modal";

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
`;
const ContainerLeft = styled.div``;
const ContainerRight = styled.div``;
const StyledIcon = styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 3.8rem;
    height: 3.8rem;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <ContainerLeft>
        <StyledIcon>Paratha</StyledIcon>
      </ContainerLeft>
      <ContainerRight onClick={() => setIsOpen(true)}>cart</ContainerRight>
      <MyModal
        title="Add Toppings"
        open={isOpen}
        buttonText="checkout"
        onClose={() => setIsOpen(false)}
        onSubmit={() => setIsOpen(false)}
      >
        <Cart />
      </MyModal>
    </Container>
  );
};

export default Header;
