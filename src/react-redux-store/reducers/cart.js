const initialState = {
  items: [],
  totalPrice: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
      };
    }

    case "CLEAR_CART":
      return {
        totalPrice: 0,
        items: {},
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
