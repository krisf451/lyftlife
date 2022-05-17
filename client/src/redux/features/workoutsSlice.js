import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { WORKOUTS_API } from "../../api/index";
import toast from "react-hot-toast";

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
  async (workout) => {
    //TODO: ISSUE IS HAPPENING HERE
    // console.log(id, "ID IN REDUX STUFF", workout);
    const res = await WORKOUTS_API.put(`/workouts/${workout._id}`, workout);
    console.log(res);
    return res.data;
  }
);

export const deleteAsyncWorkout = createAsyncThunk(
  "workouts/deleteAsyncWorkout",
  async (id) => {
    const res = await WORKOUTS_API.delete(`/workouts/${id}`);
    return res.data._id;
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
    [postAsyncWorkout.pending]: (state) => {
      console.log("posting new workout pending");
      return { ...state, loading: true };
    },
    [postAsyncWorkout.fulfilled]: (state, action) => {
      console.log("posted new workout succesfully!!");
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
        loading: false,
      };
    },
    [updateAsyncWorkout.fulfilled]: (state, action) => {
      console.log("updated workout succesfully!!");
      return {
        ...state,
        workouts: state?.workouts?.map((workout) =>
          workout?._id === action?.payload?._id ? action.payload : workout
        ),
      };
    },
    [deleteAsyncWorkout.fulfilled]: (state, action) => {
      console.log("deleted workout succesfully!!");
      toast.success("DELETED SUCESSFULLY");
      return {
        ...state,
        workouts: state?.workouts?.filter(
          (workout) => workout._id !== action.payload
        ),
      };
    },
  },
});

// export const {} = workoutsSlice.actions;
export const getAllWorkouts = (state) => state.workouts.workouts;
export default workoutsSlice.reducer;
