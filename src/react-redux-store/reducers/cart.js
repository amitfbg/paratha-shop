const initialState = {
  items: [],
  itemCount: 0,
  totalItemsPrice: 0,
  deliveryCharge: 0,
  total: 0,
};

const getTopSum = (topArray, toppingsPrices) => {
  return topArray.reduce((acc, curr) => {
    return acc + toppingsPrices[curr];
  }, 0);
};

const getTotalSum = (totalItem) => {
  return totalItem.reduce((acc, currObj) => {
    const currSum = currObj?.cost;
    return acc + currSum;
  }, 0);
};
const getTotalCount = (totalItem) => {
  return totalItem.reduce((acc, currObj) => {
    const currSum = currObj?.count;
    return acc + currSum;
  }, 0);
};

const getUpdatedValues = (state) => {
  const updatedPrice = getTotalSum(state.items);
  const updatedCount = getTotalCount(state.items);
  const updatedTotal = Number(state.deliveryCharge) + Number(updatedPrice);
  return {
    ...state,
    totalItemsPrice: updatedPrice,
    itemCount: updatedCount,
    total: updatedTotal,
  };
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      //Check if item is already in cart
      const found = state.items.findIndex(
        (currObj) => currObj?.id === action?.payload?.id
      );
      // calculating ADD ON cost
      const topSum = getTopSum(
        action?.payload?.top,
        action?.payload?.toppingsPrices
      );
      // calculating each Paratha price with or without add on
      let priceParatha = Number(topSum) + Number(action?.payload?.price);
      // creating new data to be inserted
      let newData = {};
      newData.priceParatha = priceParatha;
      newData.top = action?.payload?.top;
      // If found calculating the cost
      if (found !== -1) {
        newData = { ...state.items[found], ...newData };
        newData.cost = priceParatha * state.items[found].count;
        state.items.splice(found, 1, newData);
      } else {
        newData = { ...newData, ...action.payload };
        newData.cost = priceParatha;
        state.items.push(newData);
      }
      //updating the values
      return getUpdatedValues(state);
    }

    case "CLEAR_CART": {
      return {
        items: [],
        itemCount: 0,
        totalItemsPrice: 0,
        deliveryCharge: 0,
        total: 0,
      };
    }

    case "REMOVE_CART_ITEM": {
      state.items.splice(action.payload, 1);
      if (state.items.length === 0) {
        state.deliveryCharge = 0;
      }
      //updating the values
      return getUpdatedValues(state);
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
      //updating the values
      return getUpdatedValues(state);
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
      //updating the values
      return getUpdatedValues(state);
    }

    case "ADD_Delivery": {
      const newDeliveryCharge = action?.payload;
      //updating the values
      const updatedPrice = getTotalSum(state.items);
      const updatedCount = getTotalCount(state.items);
      const updatedTotal = Number(newDeliveryCharge) + Number(updatedPrice);
      return {
        ...state,
        totalItemsPrice: updatedPrice,
        itemCount: updatedCount,
        total: updatedTotal,
        deliveryCharge: newDeliveryCharge,
      };
    }
    default:
      return state;
  }
};

export default cart;
