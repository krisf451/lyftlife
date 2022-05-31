import React, { useState, useEffect } from "react";
import { Form, Workouts } from "../components";
import { useDispatch } from "react-redux";
import { fetchAsyncWorkoutsBySearch } from "../redux/features/workoutsSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import ChipInput from "material-ui-chip-input";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const searchWorkouts = () => {
    if (searchTerm.trim().length > 0 || tags.length > 0) {
      //dispatch searchWorkouts logic
      dispatch(
        fetchAsyncWorkoutsBySearch({ searchTerm, tags: tags.join(",") })
      );
      navigate(
        `/workouts/search?searchQuery=${searchTerm || "none"}&tags=${tags.join(
          ","
        )}`
      );
    } else {
      navigate("/workouts");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      //search for post
      //also dispatch search workouts here
      dispatch(
        fetchAsyncWorkoutsBySearch({ searchTerm, tags: tags.join(",") })
      );
    }
  };
  const clearSearch = () => {
    setSearchTerm("");
    setTags([]);
    navigate("/");
  };

  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  };
  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <main className="grid grid-cols-12 gap-2">
      <div className="col-span-12 md:col-span-6 xl:col-span-4">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-white shadow-xl rounded px-4 pt-4 pb-6 mb-4 w-96">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="search"
            >
              Search
            </label>
            <input
              className="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
              id="search"
              type="text"
              name="search"
              value={searchTerm}
              onKeyDownCapture={handleKeyPress}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search For Workouts"
            />
            <ChipInput
              style={{
                margin: "10px 0",
                height: "3rem",
                appearance: "none",
                width: "100%",
                outline: "2px solid transparent",
              }}
              value={tags}
              onAdd={handleAdd}
              onDelete={handleDelete}
              label="Search Tags"
              variant="outlined"
            />
            <button
              type="button"
              onClick={searchWorkouts}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Search
            </button>
            <button
              type="button"
              onClick={clearSearch}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline w-full"
            >
              clear
            </button>
          </div>
        </div>
        <Pagination page={page} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-8 px-2">
        <Workouts setCurrentId={setCurrentId} />
      </div>
    </main>
  );
};

export default Home;
