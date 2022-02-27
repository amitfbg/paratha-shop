import React from "react";
import styled from "styled-components";

const CheckoutContainer = styled.div`
  margin-left: 20px;
  padding: 20px;
  width: 40%;
  background-color: #fff;
  box-shadow: 2px 2px 10px #d3d3d3;
  display: flex;
  flex-direction: column;
  @media (max-width: 767.98px) {
    margin-left: 0;
    margin-top: 1rem;
    width: auto;
  }
`;

const PriceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;
const Label = styled.div``;
const Amount = styled.div``;

const Checkout = styled.div`
  color: #000000;
  min-width: 3rem;
  font-size: 18px;
  font-weight: bold;
  background-color: #8fcdf4;
  padding: 0.5rem;
  pointer-events: ${({ disabled }) => disabled && "none"};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  text-align: center;
  border-radius: 0.5rem;
  text-transform: capitalize;
`;

const CheckOutCard = ({ cartData }) => {
  const checkOutData = [
    { label: "Price", value: cartData?.totalItemsPrice },
    { label: "Delivery", value: cartData?.deliveryCharge },
    { label: "Total", value: cartData?.total },
  ];

  return (
    <CheckoutContainer>
      {checkOutData?.map(({ label, value }, idx) => {
        return (
          <PriceDetails key={idx}>
            <Label>{label}</Label>
            <Amount>{value || 0}</Amount>
          </PriceDetails>
        );
      })}
      <Checkout disabled={cartData?.items?.length === 0}>Checkout</Checkout>
    </CheckoutContainer>
  );
};

export default CheckOutCard;
