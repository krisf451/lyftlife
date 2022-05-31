import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAsyncWorkouts } from "../redux/features/workoutsSlice";

const Pagination = ({ page }) => {
  const { workouts } = useSelector((state) => state.workouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncWorkouts());
  }, []);

  return (
    <div className="flex justify-center xl:justify-start my-4 xl:ml-4">
      <Link to={`/workouts?page=1`}>Previous</Link>
      <Link to={`/workouts?page=2`}>Next</Link>
    </div>
  );
};

export default Pagination;
