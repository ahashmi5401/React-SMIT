import { configureStore } from "@reduxjs/toolkit";
import counter from "./feature/counter/CounterSlice"
export const store = configureStore({
    reducer:{
        counter : counter
    }
})
