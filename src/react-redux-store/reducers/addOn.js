const initialState = {};

const AddOnReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ADD_ON": {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default AddOnReducer;
