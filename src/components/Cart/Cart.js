/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../Counter/Counter";

const Container = styled.div`
  margin: 0 1rem;
`;
const ContainerItems = styled.div``;
const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
`;
const Wrap = styled.div`
  width: 50%;
`;
const WrapFlex = styled.div`
  min-width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AddOn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.div`
  width: 5rem;
`;

const Cart = () => {
  const reduxCartData = useSelector((state) => state.cart);
  const [cartData, setCartData] = useState({});

  useEffect(() => {
    setCartData(reduxCartData);
  }, [reduxCartData]);

  return (
    <Container>
      <ContainerItems>
        {cartData?.items?.map((currObj, index) => {
          return (
            <ProductDetails key={currObj?.id + index}>
              <WrapFlex>
                <Wrap>
                  <Name>{currObj?.id}</Name>
                  <AddOn>{currObj?.top?.map((curr) => curr)}</AddOn>
                </Wrap>
                <div style={{ width: "10rem" }}>
                  <Counter count={currObj?.count} id={currObj?.id} />
                </div>
                <Price>{currObj?.cost}</Price>
                <div style={{ width: "2rem" }}>D</div>
              </WrapFlex>
            </ProductDetails>
          );
        })}
      </ContainerItems>
      <div>{cartData.totalPrice || 0}</div>
    </Container>
  );
};

export default Cart;
