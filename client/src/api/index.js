import axios from "axios";

export const WORKOUTS_API = axios.create({
  baseURL: "http://localhost:9000/api/v1",
});
