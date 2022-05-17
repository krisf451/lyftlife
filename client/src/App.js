import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchAsyncWorkouts } from "./redux/features/workoutsSlice";
import { Routes, Route } from "react-router-dom";

import { Navbar, Home, Auth } from "./components";

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
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
