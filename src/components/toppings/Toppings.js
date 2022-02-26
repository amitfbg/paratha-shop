import { useState } from "react";
import styled from "styled-components";

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

const toppings = [
  { label: "A", price: 1 },
  { label: "B", price: 2 },
  { label: "C", price: 3 },
];

const Toppings = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <Container>
      {toppings.map(({ label }, index) => {
        return (
          <Wrap key={index}>
            <Name>{label}</Name>
            <div>
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={label}
                value={label}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
            </div>
          </Wrap>
        );
      })}
    </Container>
  );
};

export default Toppings;
