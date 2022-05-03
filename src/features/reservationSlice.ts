import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {},
});

export default reservationSlice.reducer;
