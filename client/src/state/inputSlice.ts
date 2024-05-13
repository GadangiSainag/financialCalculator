import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/sip_calculator_data.json";
export type inputObj = {
  id: string;
  value: number;
};

const initialState: inputObj[] = [];
// [
//   { id: string, value: number },
//   { id: string, value: number },
//   { id: string, value: number },
//   { id: string, value : number}
// ];
data.inputs.map((input) => {
  // console.log(input.id)
  // console.log(input.text_box.placeholder_value)
  initialState.push({ id: input.id, value: input.text_box.placeholder_value });
});

const inputSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    updateValue(state, action) {
      // state
      const index = data.inputs.findIndex(
        (item) => item.id === action.payload.id
      );
      state[index].value = action.payload.value;
    },
  },
});
export const { updateValue } = inputSlice.actions;
export default inputSlice.reducer;
