import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import moment from "moment";

const Workout = ({ workout }) => {
  return (
    <div className="max-h-96 flex flex-col justify-center items-start border border-x-2 rounded-xl p-4 cursor-pointer overflow-hidden shadow-xl">
      {/* Workout Figure + Figcaption (Experimental) */}
      <figure className="relative">
        <div className="flex items-center justify-between w-full">
          <div>
            <h1>{workout.title}</h1>
            <h3>
              By: {workout.creator} - {moment(workout.createdAt).fromNow()}
            </h3>
          </div>
          <BiDotsHorizontalRounded
            size={25}
            className="mb-4 transition-transform linear animate-slideup duration-500 hover:scale-125"
          />
        </div>

        <div className="group flex flex-col overflow-hidden relative rounded-lg">
          <div className="absolute top-0 left-0 p-2 z-10">
            <p className="opacity-0 text-gray-700 group-hover:opacity-100 transition-all duration-1000">
              {workout.tags.map((tag) => `#${tag}`)}
            </p>
          </div>
          <img
            src={workout.selectedFile}
            alt="workout"
            className="opacity-80 w-full object-cover h-56 transition-all duration-1000 linear hover:scale-125 hover:opacity-100"
          />
        </div>
        <figcaption className="absolute bottom-0 left-0 bg-white w-full opacity-80 flex justify-center py-2">
          {workout.workoutType}
        </figcaption>
      </figure>

      {/* Workout Description */}
      <div>
        <p className="my-4">{workout.description}</p>
      </div>

      {/* Workout Like and Delete Buttons */}
      {/* TEST CHANGE */}
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <FiThumbsUp size={25} className="cursor-pointer mr-2" />
          {workout.likeCount}
        </div>

        <AiFillDelete size={25} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Workout;
