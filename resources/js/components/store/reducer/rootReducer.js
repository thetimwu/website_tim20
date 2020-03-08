import authReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReduere = () => {
    return combineReducers({ authReducer });
};

export default rootReduere;
