import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import ParathaCard from "../../components/ParathaCard/ParathaCard";
import { ParathaList } from "../../utils";

const ParathaContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  background-color: #1a202c;
`;

function Home() {
  const parathaListArray = Object.keys(ParathaList);
  return (
    <>
      <Header />
      <ParathaContainer>
        {parathaListArray?.map((currItem, idx) => {
          return <ParathaCard details={currItem} key={currItem + idx} />;
        })}
      </ParathaContainer>
    </>
  );
}

export default Home;
