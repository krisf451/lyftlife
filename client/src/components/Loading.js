import React from "react";

const Loading = () => {
  return (
    <div class="flex justify-center items-center h-screen">
      <div
        class="border-b-4 border-blue-600 animate-spin w-16 h-16 rounded-full"
        role="status"
      >
        {/* <span class="visually-hidden text-blue-500">Loading...</span> */}
      </div>
    </div>
  );
};

export default Loading;
