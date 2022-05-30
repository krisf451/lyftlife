import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home, Auth, Navbar, WorkoutDetails } from "./components";

const App = () => {
  return (
    <div className="min-h-screen mx-auto max-w-7xl overflow-hidden">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<Navigate to="/workouts" replace />} />
        <Route path="/workouts" element={<Home />} />
        <Route path="/workouts/search" element={<Home />} />
        <Route path="/workouts/:id" element={<WorkoutDetails />} />
      </Routes>
    </div>
  );
};

export default App;
