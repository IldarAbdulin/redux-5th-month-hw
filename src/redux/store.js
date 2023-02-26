import { createStore } from "redux";
import { numberReducer } from "./reducer";

export const store = createStore(numberReducer)