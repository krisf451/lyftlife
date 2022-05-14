import React, { useState } from "react";

const initialFormValues = {
  title: "",
  description: "",
  workoutType: "",
  tags: [],
  selectedImg: "",
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description, workoutType, tags, selectedImg } = formValues;

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormValues({
      ...formValues,
      [name]: valueToUse,
    });
  };

  return (
    <div className="w-full max-w-xs flex justify-center items-center">
      <form class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Title
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            class="block text-gray-700 text-sm font-bold mb-2"
            for="description"
          >
            Description
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            minrows="4"
            type="text"
            value={description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="workoutType"
          >
            Workout Type
          </label>

          <select
            class="form-select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="workoutType"
            id="workoutType"
            value={workoutType}
            onChange={handleChange}
          >
            <option value="push" defaultChecked>
              Push
            </option>
            <option value="pull">Pull</option>
            <option value="legs">Legs</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="tags">
            Tags
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="tags"
            name="tags"
            type="text"
            value={tags}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                tags: e.target.value
                  .split(",")
                  .forEach((value) => tags.push(value)),
              })
            }
            placeholder="Tags (coma separated)"
          />
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="tags">
            Image
          </label>
          <input
            className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            id="formFile"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
