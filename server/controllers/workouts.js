const getWorkouts = (req, res) => {
  res.json({ message: "test get all workouts endpoint" });
};
const getWorkoutById = (req, res) => {
  res.json({ message: "test get workout by id endpoint" });
};
const createWorkout = (req, res) => {
  res.json({ message: "test post workout endpoint" });
};
const updateWorkout = (req, res) => {
  res.json({ message: "test update workout endpoint" });
};
const likeWorkout = (req, res) => {
  res.json({ message: "test like workout endpoint" });
};
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
