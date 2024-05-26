import { createSelector } from "reselect";
import { RootState } from "../state/store"; 

const selectInputById = (state: RootState, id: string) => state.inputs.data.find((input) => input.id === id);

const makeSelectInputById = () =>
  createSelector([selectInputById], (input) => input);

export default makeSelectInputById;