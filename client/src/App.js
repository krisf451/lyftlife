import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

import { Navbar, Home, Auth } from "./components";

const App = () => {
  return (
    <div className="min-h-screen mx-auto max-w-7xl overflow-hidden">
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
