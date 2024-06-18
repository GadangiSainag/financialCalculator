import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InputsState, CalculatorType } from "../utils/types";
import { AppDispatch, RootState } from "./store";

const initialState: InputsState = {
  status: "idle",
  data: [],
};

const inputSlice = createSlice({
  name: "calcInputs",
  initialState,
  reducers: {
    addNewValues(state, action: PayloadAction<CalculatorType["inputs"]>) {
      action.payload.forEach((input) => {
        state.data.push({
          id: input.id,
          value:
            input.text_box.placeholder_value ??
            input.text_box.dropdown.options.find(
              (each) => each.id === input.text_box.dropdown.initial_option_id
            )?.value,
        });
      });
    },

    updateInputValue(
      state,
      action: PayloadAction<{ id: string; value: number }>
    ) {
      const { id, value } = action.payload;
      const input = state.data.find((item) => item.id === id);
      if (input) {
        input.value = value;
      }
    },
    addSingleValue(state, action: PayloadAction<{ id: string; value: number }>) {
      const { id, value } = action.payload;
      if (value !== undefined && value !== null) {
        state.data.push({
          id,
          value,
        });
      }
    },
    clearAllInputs(state) {
      state.data = [];
    },
  },
});

export const fetchDataFromStore = () => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const calciData = getState().calculator.liveCalculatorData;

  if (calciData?.inputs) {
    dispatch(addNewValues(calciData.inputs));
  } else {
    console.warn("No calculator data found");
  }
};

export const {
  updateInputValue,
  addNewValues,
  addSingleValue,
  clearAllInputs,
} = inputSlice.actions;
export default inputSlice.reducer;
