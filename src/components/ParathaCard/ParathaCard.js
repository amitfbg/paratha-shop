import React, { useState } from "react";
import styled from "styled-components";
import MyModal from "./../Modal/index";

const Container = styled.div`
  height: 6rem;
  width: 4rem;
`;
const ContainerTop = styled.div`
  height: 4rem;
  width: 4rem;
`;
const ContainerBottom = styled.div``;
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

const ParathaCard = () => {
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <ContainerTop>
        <StyledIcon>Paratha</StyledIcon>
      </ContainerTop>
      <ContainerBottom onClick={handleChange}>Add to cart</ContainerBottom>
      <MyModal
        title="Incidents List"
        open={open}
        buttonText="Save"
        onClose={() => setOpen(false)}
      ></MyModal>
    </Container>
  );
};

export default ParathaCard;
