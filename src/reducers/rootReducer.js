import shopReducer from "./shopReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  shop: shopReducer
});

export default rootReducer;
