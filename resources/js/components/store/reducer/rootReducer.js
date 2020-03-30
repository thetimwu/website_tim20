import authReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReduere = combineReducers({ authReducer });

export default rootReduere;
