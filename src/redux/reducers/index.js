import { combineReducers } from "redux";
import { formReducer } from "./form-reducer";

export const reducer = combineReducers({
    form: formReducer
})