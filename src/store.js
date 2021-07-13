import { applyMiddleware, createStore } from "redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const myStore = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
