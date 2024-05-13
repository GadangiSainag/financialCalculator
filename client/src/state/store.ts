import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";

const store = configureStore({
  reducer: {
    // counter: counterSlice,
    inputs: inputSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
