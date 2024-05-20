import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OutputState } from "../utils/types";

const initialState: OutputState = {
  status: "idle",
  data: [],
};



const outputSlice = createSlice({
  name: "outputs",
  initialState,
  reducers: {
   
    
    updateOutputValue(
      state,
      action: PayloadAction<{ id: string; value: number }>
    ) {
      const { id, value } = action.payload;
      const output = state.data.find((item) => item.id === id);
      if (output) {
        output.value = value;
      }else {
        state.data.push({
          id: id,
          value:value,
        })
      }
    },
  },
});
export const { updateOutputValue } = outputSlice.actions;
export default outputSlice.reducer;
