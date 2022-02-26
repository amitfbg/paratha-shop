import { combineReducers } from "redux";

import paratha from "./paratha";
import cart from "./cart";

const rootReducer = combineReducers({
  paratha,
  cart,
});

export default rootReducer;
