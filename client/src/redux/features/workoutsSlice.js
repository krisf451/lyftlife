import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchWorkouts,
  fetchWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../../api";
import toast from "react-hot-toast";

const initialState = {
  workouts: [],
  workout: {},
  loading: false,
};

export const fetchAsyncWorkouts = createAsyncThunk(
  "workouts/fetchAsyncWorkouts",
  async () => {
    const res = await fetchWorkouts();
    return res.data.workouts;
  }
);

export const fetchAsyncWorkoutById = createAsyncThunk(
  "workouts/fetchAsyncWorkoutById",
  async (id) => {
    const res = await fetchWorkoutById(id);
    console.log(res);
  }
);

export const postAsyncWorkout = createAsyncThunk(
  "workouts/postAsyncWorkout",
  async (newWorkout) => {
    const res = await createWorkout(newWorkout);
    return res.data;
  }
);

export const updateAsyncWorkout = createAsyncThunk(
  "workouts/updateAsyncWorkout",
  async (workout) => {
    const res = await updateWorkout(workout._id, workout);
    return res.data;
  }
);

export const deleteAsyncWorkout = createAsyncThunk(
  "workouts/deleteAsyncWorkout",
  async (id) => {
    const res = await deleteWorkout(id);
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
      toast.success("POSTED SUCCESSFULLY!!");
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
        loading: false,
      };
    },
    [updateAsyncWorkout.pending]: (state) => {
      console.log("updating workout pending");
      return { ...state, loading: true };
    },
    [updateAsyncWorkout.fulfilled]: (state, action) => {
      console.log("updated workout succesfully!!");
      toast.success("UPDATED SUCCESSFULLY!!");
      return {
        ...state,
        loading: false,
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
