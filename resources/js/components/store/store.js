import rootReducer from "./reducer/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(Thunk))
);
