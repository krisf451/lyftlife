import React from "react";

const Workout = ({ workout }) => {
  return (
    <div>
      <h1>{workout.title}</h1>
      <img
        src={workout.selectedFile}
        alt="workout"
        className="w-full object-contain h-56"
      />
      <h3>{workout.creator}</h3>
      <p>{workout.description}</p>
    </div>
  );
};

export default Workout;
