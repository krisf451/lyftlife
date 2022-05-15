import React, { useState } from "react";
import FileBase from "react-file-base64";

const initialFormValues = {
  title: "",
  description: "",
  workoutType: "",
  tags: "",
  selectedFile: "",
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description, workoutType, tags } = formValues;

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormValues({
      ...formValues,
      [name]: valueToUse,
    });
  };

  return (
    <div className="flex items-center justify-center w-full">
      <form class="bg-white shadow-xl rounded px-4 pt-4 pb-6 mb-4">
        <div class="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="title"
          >
            Title
          </label>
          <input
            className="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Workout Name"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
            id="description"
            name="description"
            rows="4"
            type="text"
            value={description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="workoutType"
          >
            Workout Type
          </label>

          <select
            className={`h-12 shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none ${
              workoutType ? "text-gray-700" : "text-gray-400"
            }`}
            name="workoutType"
            id="workoutType"
            value={workoutType}
            onChange={handleChange}
          >
            <option value="">Select Workout Type</option>
            <option value="push">Push</option>
            <option value="pull">Pull</option>
            <option value="legs">Legs</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div class="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="tags"
          >
            Tags
          </label>
          <input
            className="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="tags"
            name="tags"
            type="text"
            value={tags}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                tags: e.target.value.split(","),
              })
            }
            placeholder="Tags (coma separated)"
          />
        </div>
        <div class="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="tags"
          >
            Image
          </label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormValues({ ...formValues, selectedFile: base64 })
            }
          />
        </div>
        <div class="flex items-center justify-start">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Workout
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
