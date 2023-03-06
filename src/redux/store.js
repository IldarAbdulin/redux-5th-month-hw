import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./slices/calculator-slice";

export const store = configureStore({
    reducer: {
        calculator: calculatorReducer
    }
})