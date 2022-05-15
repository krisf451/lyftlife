import { configureStore } from "@reduxjs/toolkit";
import workoutsReducer from "./features/workoutsSlice";

export const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
  },
});
