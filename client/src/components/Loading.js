import React from "react";
import gif from "../assets/spinner.gif";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen animate-spin">
      <img src={gif} alt="spinner" />
    </div>
  );
};

export default Loading;
