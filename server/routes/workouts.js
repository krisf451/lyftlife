const router = require("express").Router();

const {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  likeWorkout,
} = require("../controllers/workouts.js");

router.get("/", getWorkouts);
router.get("/:id", getWorkoutById);
router.post("/", createWorkout);
router.put("/:id", updateWorkout);
router.patch("/:id/likeWorkout", likeWorkout);
router.delete("/:id", deleteWorkout);

module.exports = router;
