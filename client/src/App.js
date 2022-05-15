import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="min-h-screen mx-auto flex flex-col overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
