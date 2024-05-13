import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/sip_calculator_data.json";
export type outputObj = {
  id: string;
  value: number;
};

const initialState: outputObj[] = [];

data.outputs.map((output) => {
    // console.log(input.id)
    // console.log(input.text_box.placeholder_value)
    initialState.push({ id: output.id, value: 5 });
  });
  
const outputSlice = createSlice({
  name: "outputs",
  initialState,
  reducers: {
    updateValue(state, action) {
      // state    
      const index = data.outputs.findIndex(
        (item) => item.id === action.payload.id
      );
      state[index].value = action.payload.value;
    },
  },
});
export const { updateValue } =outputSlice.actions;
export default outputSlice.reducer;
