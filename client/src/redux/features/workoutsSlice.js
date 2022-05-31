import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchWorkouts,
  fetchWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  fetchWorkoutsBySearch,
} from "../../api";
import toast from "react-hot-toast";

const initialState = {
  workouts: [],
  workout: {},
  loading: false,
  error: null,
};

export const fetchAsyncWorkouts = createAsyncThunk(
  "workouts/fetchAsyncWorkouts",
  async () => {
    const res = await fetchWorkouts();
    return res.data.workouts;
  }
);

export const fetchAsyncWorkoutsBySearch = createAsyncThunk(
  "workouts/fetchAsyncWorkoutsBySearch",
  async (searchQuery, thunkAPI) => {
    try {
      const res = await fetchWorkoutsBySearch(searchQuery);
      return res.data.workouts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
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
      state.loading = true;
    },
    [fetchAsyncWorkouts.fulfilled]: (state, action) => {
      console.log("fetched workouts succesfully!!");
      state.workouts = action.payload;
      state.loading = false;
    },
    [fetchAsyncWorkouts.rejected]: (state, action) => {
      console.log("fetching workouts failed");
      state.loading = false;
      state.error = action.payload;
    },
    [fetchAsyncWorkoutsBySearch.pending]: (state) => {
      console.log("fetching workouts by search pending");
      state.loading = true;
    },
    [fetchAsyncWorkoutsBySearch.fulfilled]: (state, action) => {
      console.log("fetched workouts by search succesfully!!");
      state.workouts = action.payload;
      state.loading = false;
    },
    [fetchAsyncWorkoutsBySearch.rejected]: (state, action) => {
      console.log("fetching workouts by search failed");
      state.loading = false;
      state.error = action.payload;
    },
    [fetchAsyncWorkoutById.fulfilled]: (state, action) => {
      console.log("fetched workout BY ID succesfully!");
      state.workout = action.payload;
    },
    [postAsyncWorkout.pending]: (state) => {
      console.log("posting new workout pending");
      state.loading = true;
    },
    [postAsyncWorkout.fulfilled]: (state, action) => {
      console.log("posted new workout succesfully!!");
      toast.success("POSTED SUCCESSFULLY!!");
      state.workouts.push(action.payload);
      state.loading = false;
    },
    [updateAsyncWorkout.pending]: (state) => {
      console.log("updating workout pending");
      state.loading = true;
    },
    [updateAsyncWorkout.fulfilled]: (state, action) => {
      console.log("updated workout succesfully!!");
      toast.success("UPDATED SUCCESSFULLY!!");
      state.loading = false;
      state.workouts = state.workouts.map((workout) =>
        workout?._id === action?.payload._id ? action.payload : workout
      );
    },
    [deleteAsyncWorkout.fulfilled]: (state, action) => {
      console.log("deleted workout succesfully!!");
      toast.success("DELETED SUCESSFULLY");
      state.workouts = state.workouts.filter(
        (workout) => workout?._id !== action.payload
      );
    },
  },
});

// export const {} = workoutsSlice.actions;
export const getAllWorkouts = (state) => state.workouts.workouts;
export default workoutsSlice.reducer;
