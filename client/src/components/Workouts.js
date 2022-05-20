import React from "react";
import { useSelector } from "react-redux";
import { getAllWorkouts } from "../redux/features/workoutsSlice";

import Workout from "./Workout";
import Loading from "./Loading";

const Workouts = ({ setCurrentId }) => {
  const workouts = useSelector(getAllWorkouts);
  const { loading } = useSelector((state) => state.workouts);

  if (loading) return <Loading />;
  if (workouts.length === 0)
    return <h2 className="text-center">No Workouts</h2>;

  return (
    <div className="flex flex-wrap gap-4 justify-center xl:justify-start">
      {workouts?.map((workout) => (
        <Workout
          workout={workout}
          key={workout._id}
          setCurrentId={setCurrentId}
        />
      ))}
    </div>
  );
};

export default Workouts;
