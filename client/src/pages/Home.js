import React from "react";
import { Form, Workouts } from "../components";

const Home = () => {
  return (
    <main className="grid grid-cols-12 ">
      <div className="col-span-12 md:col-span-6 lg:col-span-4 px-4">
        <Form />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-8 px-4">
        <Workouts />
      </div>
    </main>
  );
};

export default Home;
