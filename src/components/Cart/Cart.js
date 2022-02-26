/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
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

const Cart = () => {
  const reduxCartData = useSelector((state) => state.cart);
  const [cartData, setCartData] = useState({});

  useEffect(() => {
    setCartData(reduxCartData);
  }, [reduxCartData]);

  return (
    <Container>
      {cartData?.items?.map((currObj, index) => {
        return (
          <Wrap key={index}>
            <Name>{currObj.id}</Name>
          </Wrap>
        );
      })}
    </Container>
  );
};

export default Cart;
