import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const { workouts } = useSelector((state) => state.workouts);
  const PAGE_LIMIT = 4;
  const maxPages = Math.ceil((workouts.length - 1) / PAGE_LIMIT);

  return (
    <div className="flex justify-center xl:justify-start my-4 xl:ml-4">
      <Link to={`/workouts?page=${page >= 2 ? (page - 1).toString() : "1"}`}>
        Previous
      </Link>
      <Link
        to={`/workouts?page=${
          page <= maxPages ? (page + 1).toString() : maxPages
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
