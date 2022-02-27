import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import ParathaCard from "../../components/ParathaCard/ParathaCard";

const ParathaContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  background-color: #1a202c;
`;

function Home() {
  const dispatch = useDispatch();
  const [parathaList, setParathaList] = useState([]);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    setLoading(0);
    Promise.all([
      fetch("http://localhost:3001/ParathaList").then((value) => value.json()),
      fetch("http://localhost:3001/AddOns").then((value) => value.json()),
    ])
      .then((data) => {
        console.log(data);
        if (data[0].length) {
          setParathaList(data[0]);
        }
        if (data[1]) {
          dispatch({ type: "ADD_ADD_ON", payload: data[1] });
        }
        setLoading(1);
      })
      .catch((err) => {
        console.error(err);
        setLoading(-1);
      });
  }, []);

  const getContent = () => {
    if (loading === 0) {
      return <div>Loading</div>;
    }
    if (loading === -1) {
      return <div>Error</div>;
    }
    return (
      <>
        <Header />
        <ParathaContainer>
          {parathaList?.map((currItem, idx) => {
            return <ParathaCard details={currItem} key={currItem + idx} />;
          })}
        </ParathaContainer>
      </>
    );
  };

  return getContent();
}

export default Home;
