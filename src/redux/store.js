import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./root-reducer";

const middlewares = [logger]

const store = configureStore({ reducer: rootReducer }, applyMiddleware(...middlewares))

export default store;