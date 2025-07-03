import { configureStore } from "@reduxjs/toolkit";
import lekhapalSlice from '../features/slice'

export const store = configureStore({
    reducer: lekhapalSlice
})