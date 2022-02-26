const initialState = {
  items: [],
  totalPrice: 0,
};

const toplins = {
  A: 1,
  B: 2,
  C: 3,
};

const getTopSum = (topArray) => {
  return topArray.reduce((acc, curr) => {
    return acc + toplins[curr];
  }, 0);
};

const getTotalSum = (totalItem) => {
  return totalItem.reduce((acc, currObj) => {
    return acc + currObj.cost;
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
      if (found !== -1) {
        newData = { ...state.items[found] };
        newData.top = action.payload.top;
        newData.cost = priceParatha * state.items[found].count;
        state.items.splice(found, 1, newData);
      } else {
        newData = { ...action.payload };
        newData.cost = priceParatha;
        state.items.push(newData);
      }
      const updatedPrice = getTotalSum(state.items);
      return {
        ...state,
        totalPrice: updatedPrice,
      };
    }

    case "CLEAR_CART":
      return {
        items: [],
        totalPrice: 0,
      };

    case "REMOVE_CART_ITEM":
      return {
        ...state,
      };

    case "PLUS_CART_ITEM": {
      return {
        ...state,
      };
    }

    case "MINUS_CART_ITEM": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default cart;
