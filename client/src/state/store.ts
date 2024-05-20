import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice.ts";
import calculatorSlice from "./calculatorSlice.ts";
// import outputSlice from "./outputSlice";

const store = configureStore({
  reducer: {
    // counter: counterSlice,
    calculator: calculatorSlice,
    inputs: inputSlice,

    //outputs: outputSlice
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
