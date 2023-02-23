import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers";

const reducers = combineReducers({
    count: counterReducer
})


export const store = createStore(reducers)