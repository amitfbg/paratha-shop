import { toppingsPrics } from "../../utils";

const initialState = {
  items: [],
  totalPrice: 0,
};

const getTopSum = (topArray) => {
  return topArray.reduce((acc, curr) => {
    return acc + toppingsPrics[curr];
  }, 0);
};

const getTotalSum = (totalItem) => {
  return totalItem.reduce((acc, currObj) => {
    const currSum = currObj?.cost || 0;
    return acc + currSum;
  }, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const found = state.items.findIndex(
        (currObj) => currObj?.id === action.payload.id
      );
      const topSum = getTopSum(action.payload.top);
      let priceParatha = topSum + 50;
      let newData = {};
      newData.priceParatha = priceParatha;
      newData.top = action.payload.top;
      if (found !== -1) {
        newData = { ...state.items[found], ...newData };
        newData.cost = priceParatha * state.items[found].count;
        state.items.splice(found, 1, newData);
      } else {
        newData = { ...newData, ...action.payload };
        newData.cost = priceParatha;
        state.items.push(newData);
      }
      const updatedPrice = getTotalSum(state.items);
      return {
        ...state,
        totalPrice: updatedPrice,
      };
    }

    case "CLEAR_CART": {
      return {
        items: [],
        totalPrice: 0,
      };
    }

    case "REMOVE_CART_ITEM": {
      state.items.splice(action.payload, 1);
      const updatedPrice = getTotalSum(state.items);
      return {
        ...state,
        totalPrice: updatedPrice,
      };
    }

    case "PLUS_CART_ITEM": {
      const found = state.items.findIndex(
        (currObj) => currObj?.id === action.payload
      );
      let newData = {};
      if (found !== -1) {
        newData = { ...state.items[found] };
        newData.count = state.items[found].count + 1;
        newData.cost =
          state.items[found].priceParatha * (state.items[found].count + 1);
        state.items.splice(found, 1, newData);
      }
      const updatedPrice = getTotalSum(state.items);
      return {
        ...state,
        totalPrice: updatedPrice,
      };
    }

    case "MINUS_CART_ITEM": {
      const found = state.items.findIndex(
        (currObj) => currObj?.id === action.payload
      );
      let newData = {};
      if (found !== -1) {
        if (state.items[found].count - 1 === 0) {
          state.items.splice(found, 1);
        } else {
          newData = { ...state.items[found] };
          newData.count = state.items[found].count - 1;
          newData.cost =
            state.items[found].priceParatha * (state.items[found].count - 1);
          state.items.splice(found, 1, newData);
        }
      }
      const updatedPrice = getTotalSum(state.items);
      return {
        ...state,
        totalPrice: updatedPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
