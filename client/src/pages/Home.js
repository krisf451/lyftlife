import React from "react";
import { Form, Workouts } from "../components";

const Home = () => {
  return (
    <main className="grid grid-cols-12 gap-2">
      <div className="col-span-12 md:col-span-6 xl:col-span-4 border border-black ml-2">
        <Form />
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-8 px-2 border border-black mr-6">
        <Workouts />
      </div>
    </main>
  );
};

export default Home;
