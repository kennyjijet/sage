import { combineReducers } from "redux";
import backendDataReducer from "./backendDataReducer";

export default combineReducers({
  backendDatas: backendDataReducer
});
