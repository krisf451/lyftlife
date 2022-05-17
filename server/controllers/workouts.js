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
  //TODO: Will Add Validation middleware soon
  const workout = req.body;
  const newWorkout = new Workouts(workout);
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
  console.log(req.body, "REQBODY");
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
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  likeWorkout,
};
