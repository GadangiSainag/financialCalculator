import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OutputState, TextOutputComponent, inputObj } from "../utils/types";
import { calculateOutputs } from "../utils/calculations";

const initialState: OutputState = {
  status: "idle",
  data: [],
};



const outputSlice = createSlice({
  name: "outputs",
  initialState,
  reducers: {

    calculateOutput(state, action: 
      PayloadAction<{ inputs: inputObj[], formulas: TextOutputComponent["output"][] }>) {
      const { inputs, formulas } = action.payload;
      state.data =calculateOutputs(inputs, formulas);
    },
    
    updateOutputValue(
      state,
      action: PayloadAction<{ id: string; value: number }>
    ) {
      const { id, value } = action.payload;
      const output = state.data.find((item) => item.id === id);
      if (output) {
        output.value = value;
      }else {
        // state.data.push({
        //   id: id,
        //   value:value,
        // })
      }
    },
    clearAllOutputs(state) {
      state.data= [];
    },
  },
});
export const { updateOutputValue ,clearAllOutputs ,calculateOutput} = outputSlice.actions;
export default outputSlice.reducer;
