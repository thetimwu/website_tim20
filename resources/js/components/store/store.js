import rootReducer from "./reducer/rootReducer";
import { createStore } from "redux";

export const store = createStore(rootReducer);
