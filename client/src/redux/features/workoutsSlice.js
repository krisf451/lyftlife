import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { WORKOUTS_API } from "../../api/index";

const initialState = {
  workouts: [],
  workout: {},
  loading: false,
};

export const fetchAsyncWorkouts = createAsyncThunk(
  "workouts/fetchAsyncWorkouts",
  async () => {
    const res = await WORKOUTS_API.get("/workouts");
    return res.data.workouts;
  }
);

export const fetchAsyncWorkoutById = createAsyncThunk(
  "workouts/fetchAsyncWorkoutById",
  async (id) => {
    const res = await WORKOUTS_API.get(`/workouts/${id}`);
    console.log(res);
  }
);

export const postAsyncWorkout = createAsyncThunk(
  "workouts/postAsyncWorkout",
  async (newWorkout) => {
    const res = await WORKOUTS_API.post(`/workouts`, newWorkout);
    return res.data;
  }
);

export const updateAsyncWorkout = createAsyncThunk(
  "workouts/updateAsyncWorkout",
  async (updatedWorkout, id) => {
    const res = await WORKOUTS_API.patch(`/workouts/${id}`, updatedWorkout);
    console.log(res);
  }
);

export const deleteAsyncWorkout = createAsyncThunk(
  "workouts/deleteAsyncWorkout",
  async (id) => {
    const res = await WORKOUTS_API.delete(`/workouts/${id}`);
    console.log(res);
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
    [fetchAsyncWorkoutById.fulfilled]: (state, action) => {
      console.log("fetched workout BY ID succesfully!");
      return { ...state, workout: action.payload };
    },
    [postAsyncWorkout.fulfilled]: (state, action) => {
      console.log("posted new workout succesfully!!");
      return { ...state, workouts: [...state.workouts, action.payload] };
    },
    [updateAsyncWorkout.fulfilled]: (state, action) => {
      console.log("updated workout succesfully!!");
      return {
        ...state,
        workouts: state.workouts.map((workout) =>
          workout._id === action.payload._id ? action.payload : workout
        ),
      };
    },
    [deleteAsyncWorkout.fulfilled]: (state, action) => {
      console.log("deleted workout succesfully!!");
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload
        ),
      };
    },
  },
});

// export const {} = workoutsSlice.actions;
export const getAllWorkouts = (state) => state.workouts.workouts;
export default workoutsSlice.reducer;
