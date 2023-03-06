import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: 'calculatorSlice',
    initialState: {
        answer: 0
    },
    reducers: {
        additionAnswer: (state, action) => {
            state.answer = action.payload
        },
        subtractionAnswer: (state, action) => {
            state.answer = action.payload
        },
        multiplicationAnswer: (state, action) => {
            state.answer = action.payload
        },
        divisionAnswer: (state, action) => {
            state.answer = action.payload
        }
    }
})

export const { additionAnswer, subtractionAnswer, multiplicationAnswer, divisionAnswer } = calculatorSlice.actions
export default calculatorSlice.reducer
