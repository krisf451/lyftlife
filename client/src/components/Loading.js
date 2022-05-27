import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="border-b-4 border-blue-600 animate-spin w-16 h-16 rounded-full"
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
