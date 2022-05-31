import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import moment from "moment";
import { deleteAsyncWorkout } from "../redux/features/workoutsSlice";
import { useDispatch, useSelector } from "react-redux";

import defaultWorkout from "../images/workout_default.jpg";

const Workout = ({ workout, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const { authData } = useSelector((state) => state.auth);

  return (
    <div className="h-[475px] w-[250px] flex flex-col justify-between items-start border border-x-2 rounded-xl p-4 cursor-pointer overflow-hidden shadow-xl">
      {/* Workout Figure + Figcaption (Experimental) */}
      <figure className="relative w-full">
        <div className="flex items-center justify-between w-full">
          <div>
            <h1>{workout.title}</h1>
            <h3>
              By: {workout.name} - {moment(workout.createdAt).fromNow()}
            </h3>
          </div>
          {(user?.result?._id === workout.creator ||
            user?.result?.googleId === workout.creator) &&
            authData !== null && (
              <BiDotsHorizontalRounded
                size={25}
                className="mb-4 transition-transform linear animate-slideup duration-500 hover:scale-125"
                onClick={() => setCurrentId(workout._id)}
              />
            )}
        </div>

        <div className="group flex flex-col overflow-hidden relative rounded-lg">
          <div className="absolute bottom-0 left-0 p-2 z-10">
            <p className="opacity-0 text-gray-700 group-hover:opacity-100 transition-all duration-1000">
              {workout.tags.map((tag) => `#${tag}`)}
            </p>
          </div>
          <img
            src={workout.selectedFile || defaultWorkout}
            alt="workout"
            className="opacity-80 w-full object-cover h-56 transition-all duration-1000 linear hover:scale-125 hover:opacity-100"
          />
        </div>
        <figcaption className="absolute bottom-0 left-0 bg-white w-full opacity-80 flex justify-end p-2">
          {workout.workoutType}
        </figcaption>
      </figure>

      {/* Workout Description */}
      <div className="h-24 overflow-hidden mb-4">
        <p className="my-4">{workout.description}</p>
      </div>

      {/* Workout Like and Delete Buttons */}
      <div className="flex justify-between w-full self-end">
        <div className="flex items-center">
          <FiThumbsUp size={25} className="cursor-pointer mr-2" />
          {workout.likeCount}
        </div>
        {(user?.result?._id === workout.creator ||
          user?.result?.googleId === workout.creator) &&
          authData !== null && (
            <AiFillDelete
              size={25}
              className="cursor-pointer"
              onClick={() => dispatch(deleteAsyncWorkout(workout._id))}
            />
          )}
      </div>
    </div>
  );
};

export default Workout;
