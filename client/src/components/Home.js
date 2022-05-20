import React, { useState } from "react";
import { Form, Workouts } from "../components";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  return (
    <main className="grid grid-cols-12 gap-2">
      <div className="col-span-12 md:col-span-6 xl:col-span-4">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-8 px-2">
        <Workouts setCurrentId={setCurrentId} />
      </div>
    </main>
  );
};

export default Home;
