import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterValue: 0 , totalAmount :0},
  reducers: {
    increaseVal : (state,action) => {
      state.counterValue = action.payload;
      state.totalAmount = state.counterValue * 2
    },

    
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;