import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import outputSlice from "./outputSlice";

const store = configureStore({
  reducer: {
    // counter: counterSlice,
    inputs: inputSlice,
    outputs : outputSlice
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
