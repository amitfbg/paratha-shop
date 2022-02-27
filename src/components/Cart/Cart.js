/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import Counter from "../Counter/Counter";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ParathaCard from "../ParathaCard/ParathaCard";
import { deliveryCharges } from "../../utils";

const Container = styled.div`
  background-color: #f1f3f6;
  height: 100vh;
  padding: 0 1rem;
`;

const ContainerHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem 0 1rem;
`;

const ClearCart = styled.div`
  color: #000000;
  min-width: 3rem;
  font-size: 18px;
  font-weight: bold;
  background-color: #d3d3d3;
  padding: 0.5rem;
  cursor: pointer;
  line-height: 1;
  text-align: center;
  border-radius: 0.5rem;
`;

const ContainerItems = styled.div`
  height: 50vh;
  background-color: #fff;
  box-shadow: 2px 2px 10px #d3d3d3;
  overflow: auto;
`;
const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  &:nth-of-type(odd) {
    background-color: #efefef;
  }
`;
const Wrap = styled.div`
  width: 50%;
`;
const WrapFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: bold;
`;
const AddOn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 400;
`;

const Price = styled.div`
  width: 5rem;
`;

const DeleteWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Delete = styled(DeleteIcon)`
  height: 1rem;
  width: 1rem;
`;

const DeliveryDistance = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const ContainerBottom = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;
const Back = styled.div`
  margin-left: 1rem;
  color: blue;
  cursor: pointer;
`;
const CheckoutContainer = styled.div`
  margin-left: 20px;
  padding: 20px;
  width: 30%;
  background-color: #fff;
  box-shadow: 2px 2px 10px #d3d3d3;
  display: flex;
  flex-direction: column;
`;

const PriceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;
const Label = styled.div``;
const Amount = styled.div``;

const Checkout = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: #fff;
  text-transform: capitalize;
`;

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxCartData = useSelector((state) => state.cart);
  const [cartData, setCartData] = useState({});
  const [selectedOption, setSelectedOption] = useState(
    deliveryCharges[0].value
  );
  useEffect(() => {
    console.log(reduxCartData, "CART");
    setCartData(reduxCartData);
  }, [reduxCartData]);

  const handleDelete = (idx) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: idx });
  };

  const handleChange = (value) => {
    setSelectedOption(value);
    dispatch({ type: "ADD_Delivery", payload: value });
  };

  return (
    <Container>
      <ContainerHead>
        <div>Cart</div>
        <ClearCart
          onClick={() => {
            dispatch({ type: "CLEAR_CART" });
            setSelectedOption(deliveryCharges[0].value);
          }}
        >
          Clear
        </ClearCart>
      </ContainerHead>
      <ContainerItems>
        {cartData?.items?.map((currObj, index) => {
          return (
            <ProductDetails key={currObj?.id + index}>
              <WrapFlex>
                <Wrap>
                  <Name>{currObj?.id}</Name>
                  <AddOn>{currObj?.top?.map((curr) => curr + " ")}</AddOn>
                </Wrap>
                <div style={{ width: "10rem" }}>
                  <Counter count={currObj?.count} id={currObj?.id} />
                </div>
                <DeleteWrap>
                  <ParathaCard details={currObj?.id} isEdit />
                </DeleteWrap>
                <Price>{currObj?.cost}</Price>
                <DeleteWrap onClick={() => handleDelete(index)}>
                  <Delete />
                </DeleteWrap>
              </WrapFlex>
            </ProductDetails>
          );
        })}
      </ContainerItems>
      <DeliveryDistance>
        <Label>Choose Delivery Location</Label>
        <select
          style={{ marginLeft: "1rem" }}
          value={selectedOption}
          onChange={(e) => handleChange(e.target.value)}
        >
          {deliveryCharges.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </DeliveryDistance>
      <ContainerBottom>
        <Back onClick={() => navigate(-1)}>back to shopping</Back>
        <CheckoutContainer>
          <PriceDetails>
            <Label>Price</Label>
            <Amount>{cartData.totalItemsPrice || 0}</Amount>
          </PriceDetails>
          <PriceDetails>
            <Label>Delivery</Label>
            <Amount>{cartData.deliveryCharge || 0}</Amount>
          </PriceDetails>
          <PriceDetails>
            <Label>Total</Label>
            <Amount>{cartData.total || 0}</Amount>
          </PriceDetails>
          <Checkout>Checkout</Checkout>
        </CheckoutContainer>
      </ContainerBottom>
    </Container>
  );
};

export default Cart;
