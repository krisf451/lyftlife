import React, { useState, useEffect } from "react";
import { Form, Workouts } from "../components";
import { useDispatch } from "react-redux";
import { fetchAsyncWorkouts } from "../redux/features/workoutsSlice";
import Pagination from "./Pagination";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncWorkouts());
  }, [dispatch]);

  return (
    <main className="grid grid-cols-12 gap-2">
      <div className="col-span-12 md:col-span-6 xl:col-span-4">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <Pagination />
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-8 px-2">
        <Workouts setCurrentId={setCurrentId} />
      </div>
    </main>
  );
};

export default Home;
