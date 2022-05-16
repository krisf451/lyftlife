import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Workout = ({ workout }) => {
  return (
    <div className="max-h-96 flex flex-col justify-center items-center border border-black rounded-md p-2 cursor-pointer">
      <figure className="relative">
        <div className="flex items-center justify-between w-full">
          <div>
            <h1>{workout.title}</h1>
            <h3>By: {workout.creator}</h3>
          </div>
          <BiDotsHorizontalRounded size={25} className="mb-4" />
        </div>

        <div className="overflow-hidden">
          <img
            src={workout.selectedFile}
            alt="workout"
            className="w-full object-contain h-56 transition-all duration-1000 ease-in-out hover:scale-110 hover:opacity-90"
          />
        </div>
        <figcaption className="absolute bottom-0 left-0 bg-white w-full opacity-80 flex justify-center py-2">
          {workout.workoutType}
        </figcaption>
      </figure>
      <p>{workout.description}</p>
      <div className="flex justify-between w-full">
        <FiThumbsUp
          size={25}
          className="transition-transform duration-500 ease-in-out hover:translate-y-0.5 cursor-pointer"
        />
        <AiFillDelete
          size={25}
          className="transition-transform duration-500 ease-in-out hover:translate-y-0.5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Workout;
