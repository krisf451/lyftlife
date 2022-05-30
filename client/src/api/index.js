import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:9000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchWorkouts = () => API.get("/workouts");
export const fetchWorkoutsBySearch = (searchQuery) =>
  API.get(
    `/workouts/search?searchQuery=${searchQuery.searchTerm || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const fetchWorkoutById = (id) => API.get(`/workouts/${id}`);
export const createWorkout = (workout) => API.post("/workouts", workout);
export const updateWorkout = (id, updatedWorkout) =>
  API.put(`/workouts/${id}`, updatedWorkout);
export const likeWorkout = (id) => API.put(`/workouts/${id}/likeWorkout`);
export const deleteWorkout = (id) => API.delete(`/workouts/${id}`);

export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);
