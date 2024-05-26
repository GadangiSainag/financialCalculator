import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice.ts";
import calculatorSlice from "./calculatorSlice.ts";
import outputSlice from "./outputSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    // counter: counterSlice,
    calculator: calculatorSlice,
    inputs: inputSlice,
    outputs: outputSlice,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
