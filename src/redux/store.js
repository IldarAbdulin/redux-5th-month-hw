import { configureStore, combineReducers } from "@reduxjs/toolkit";

import photosSlice from "./slices/photos-slice";

const reducers = combineReducers({
    photos: photosSlice
})

export const store = configureStore({
    reducer: reducers
})