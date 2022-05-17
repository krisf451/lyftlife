import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchAsyncWorkouts } from "./redux/features/workoutsSlice";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { Navbar } from "./components";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncWorkouts());
  }, [dispatch]);
  return (
    <div className="min-h-screen mx-auto flex flex-col overflow-hidden">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
