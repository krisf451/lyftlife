import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { WORKOUTS_API } from "../../api/index";

const initialState = {
  workouts: [],
  loading: false,
};

export const fetchAsyncWorkouts = createAsyncThunk(
  "workouts/fetchAsyncWorkouts",
  async () => {
    const res = await WORKOUTS_API.get("/workouts");
    console.log(res);
    return res.data.workouts;
  }
);

const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncWorkouts.pending]: (state) => {
      console.log("fetching workouts pending");
      return { ...state, loading: true };
    },
    [fetchAsyncWorkouts.fulfilled]: (state, action) => {
      console.log("fetched workouts succesfully!!");
      return { ...state, workouts: action.payload, loading: false };
    },
    [fetchAsyncWorkouts.rejected]: () => {
      console.log("fetching workouts failed");
    },
  },
});

// export const {} = workoutsSlice.actions;
export const getAllWorkouts = (state) => state.workouts.workouts;
export default workoutsSlice.reducer;
