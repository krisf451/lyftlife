import { configureStore } from "@reduxjs/toolkit";
import workoutsReducer from "./features/workoutsSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
    auth: authReducer,
  },
});
