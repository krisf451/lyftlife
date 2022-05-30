const Workouts = require("../models/workouts.js");
const mongoose = require("mongoose");

//GET ALL WORKOUTS ENDPOINT
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workouts.find();
    res.status(200).json({
      success: "OK",
      numberOfWorkouts: workouts.length,
      workouts: workouts,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//GET ALL WORKOUTS BY SEARCH ENDPOINT
const getWorkoutsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");
    const workouts = await Workouts.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });
    res.status(200).json({
      success: "OK",
      numberOfWorkouts: workouts.length,
      workouts: workouts,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//GET WORKOUT BY ID ENDPOINT
const getWorkoutById = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.json({ message: `No workout with ID ${_id} found` });
    const workout = await Workouts.findById(_id);
    res.json(workout);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//CREATE NEW WORKOUT ENDPOINT
const createWorkout = async (req, res) => {
  const workout = req.body;
  const newWorkout = new Workouts({
    ...workout,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//UPDATE WORKOUT ENDPOINT
const updateWorkout = async (req, res) => {
  const { id: _id } = req.params;
  const workout = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.json({ message: `No workout with ID ${_id} found` });

    const updatedWorkout = await Workouts.findByIdAndUpdate(
      _id,
      { ...workout, _id },
      {
        new: true,
      }
    );
    res.json(updatedWorkout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//LIKE WORKOUT ENDPOINT
const likeWorkout = (req, res) => {
  res.json({ message: "test like workout endpoint" });
};

//DELETE WORKOUT ENDPOINT
const deleteWorkout = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.json({ message: `No workout with ID ${_id} found` });
    await Workouts.findByIdAndRemove(_id);
    res.json({ message: `Succesfully deleted workout with ID ${_id}`, _id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkoutsBySearch,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  likeWorkout,
};
