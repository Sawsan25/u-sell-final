import { combineReducers } from "redux";
import alerts from "./alerts";
import homepage from "./homepage";

const rootReducer = combineReducers({
  alerts,
  homepage,
});

export default rootReducer;
