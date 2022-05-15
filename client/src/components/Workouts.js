import React from "react";
import { useSelector } from "react-redux";
import { getAllWorkouts } from "../redux/features/workoutsSlice";

import Workout from "./Workout";

const Workouts = () => {
  const workouts = useSelector(getAllWorkouts);
  return (
    <div>
      {workouts?.map((workout) => (
        <Workout workout={workout} key={workout._id} />
      ))}
    </div>
  );
};

export default Workouts;
