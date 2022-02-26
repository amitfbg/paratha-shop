import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerLeft>
        <StyledIcon>Paratha</StyledIcon>
      </ContainerLeft>
      <ContainerRight onClick={() => navigate("/cart")}>cart</ContainerRight>
    </Container>
  );
};

export default Header;
