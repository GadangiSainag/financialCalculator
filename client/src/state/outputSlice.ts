import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/sip_calculator_data.json";
import { outputObj } from "../utils/types";

const initialState: outputObj[] = [];

data.outputs.map((output) => {
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
export const { updateValue } = outputSlice.actions;
export default outputSlice.reducer;
