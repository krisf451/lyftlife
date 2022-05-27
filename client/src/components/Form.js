import React, { useState, useEffect } from "react";
import {
  postAsyncWorkout,
  updateAsyncWorkout,
} from "../redux/features/workoutsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Loading } from ".";

const initialFormValues = {
  title: "",
  description: "",
  workoutType: "",
  tags: "",
  selectedFile: "",
};

const Form = ({ currentId, setCurrentId }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const workout = useSelector((state) =>
    currentId ? state.workouts.workouts.find((w) => w._id === currentId) : null
  );
  const { title, description, workoutType, tags, selectedFile } = formValues;
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const { authData, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, authData]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newWorkout = { ...formValues, name: user?.result?.name };
    if (currentId) {
      dispatch(updateAsyncWorkout(newWorkout));
    } else {
      dispatch(postAsyncWorkout(newWorkout));
    }
    clear();
  };

  const clear = () => {
    setFormValues(initialFormValues);
    setCurrentId(null);
  };

  useEffect(() => {
    if (!workout?.title) clear();
    if (workout) {
      setFormValues(workout);
    }
    //eslint-disable-next-line
  }, [workout]);

  if (isLoading) return <Loading />;

  if (!user?.result) {
    return (
      <div className="flex justify-center items-center w-full mt-4 p-2 ml-2">
        <p>
          Please Sign In to create your own workouts and like other's workouts
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full">
      <form
        className="bg-white shadow-xl rounded px-4 pt-4 pb-6 mb-4 w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="font-extrabold text-3xl mb-4 mt-2">
          {currentId ? "Editing" : "Creating"} a Workout
        </h2>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Workout Name"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
            id="description"
            name="description"
            rows="4"
            type="text"
            value={description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="workoutType"
          >
            Workout Type
          </label>

          <select
            className={`h-12 shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none ${
              workoutType ? "text-gray-700" : "text-gray-400"
            }`}
            name="workoutType"
            id="workoutType"
            value={workoutType}
            onChange={handleChange}
          >
            <option value="">Select Workout Type</option>
            <option value="push">Push</option>
            <option value="pull">Pull</option>
            <option value="legs">Legs</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tags"
          >
            Tags
          </label>
          <input
            className="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="tags"
            name="tags"
            type="text"
            value={tags}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                tags: e.target.value.split(","),
              })
            }
            placeholder="Tags (coma separated)"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="selectedFile"
          >
            Image
          </label>
          <input
            className="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
            type="text"
            name="selectedFile"
            id="selectedFile"
            value={selectedFile}
            onChange={handleChange}
            placeholder="IMG address"
          />
        </div>
        <div className="flex items-center justify-start">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 ml-6 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={clear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
