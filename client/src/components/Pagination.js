import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAsyncWorkouts } from "../redux/features/workoutsSlice";

const Pagination = ({ page }) => {
  const { workouts, currentPage, numberOfPages } = useSelector(
    (state) => state.workouts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (page) {
      dispatch(fetchAsyncWorkouts(page));
    }
  }, [dispatch, page]);

  return (
    <div className="flex w-full justify-center">
      <div className="flex justify-between w-32">
        <Link to={`/workouts?page=${page >= 2 ? page - 1 : 1}`}>Previous</Link>
        <Link
          to={`/workouts?page=${page < numberOfPages ? Number(page) + 1 : 1}`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
