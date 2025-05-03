import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increaseCount: (state, action) => {
      state.counter += action.payload.offset;
    },
    decreaseCount: (state, action) => {
      state.counter -= action.payload.offset;
    },
  },
});

export default counterSlice.reducer;
export const { increaseCount, decreaseCount } = counterSlice.actions;
