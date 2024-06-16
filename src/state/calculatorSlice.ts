import { createSlice } from "@reduxjs/toolkit";
import { CalculatorType } from "../utils/types";

const initialState: {
  liveCalculatorData: CalculatorType | null;
  status: "idle" | "error" | "loading";
} = {
  liveCalculatorData: null,
  status: "idle",
};

const calculatorSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    updateCalc: (state, action) => {
      state.liveCalculatorData = action.payload;
    },
    setPageLoading: (state) => {
      state.status = "loading";
    },
    setPageError: (state, action) => {
      state.status = "error";
      state.liveCalculatorData = action.payload;
    },
    setPageSuccess: (state, action) => {
      state.status = "idle";
      state.liveCalculatorData = action.payload;
    },
  },
});


export const {
  updateCalc,
  setPageError,
  setPageLoading,
  setPageSuccess,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
