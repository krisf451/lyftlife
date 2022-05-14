const Workouts = require("../models/workouts.js");

//GET ALL WORKOUTS ENDPOINT
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workouts.find();
    res.status(200).json({ success: "OK", workouts: workouts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//GET WORKOUT BY ID ENDPOINT
const getWorkoutById = (req, res) => {
  res.json({ message: "test get workout by id endpoint" });
};

//CREATE NEW WORKOUT ENDPOINT
const createWorkout = async (req, res) => {
  //TODO: Will Add Validation middleware soon
  const workout = req.body;
  const newWorkout = new Workouts(workout);
  try {
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

//UPDATE WORKOUT ENDPOINT
const updateWorkout = (req, res) => {
  res.json({ message: "test update workout endpoint" });
};

//LIKE WORKOUT ENDPOINT
const likeWorkout = (req, res) => {
  res.json({ message: "test like workout endpoint" });
};

//DELETE WORKOUT ENDPOINT
const deleteWorkout = (req, res) => {
  res.json({ message: "test delete workout endpoint" });
};

module.exports = {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  likeWorkout,
};
