import { combineReducers } from "redux";
import apiCalling from "../features/apiCalling";

const rootReducer = combineReducers({
  api: apiCalling,
});

export default rootReducer;
