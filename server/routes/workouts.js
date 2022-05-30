const router = require("express").Router();
const auth = require("../middleware/auth.js");

const {
  getWorkouts,
  getWorkoutsBySearch,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  likeWorkout,
} = require("../controllers/workouts.js");

router.get("/", getWorkouts);
router.get("/search", getWorkoutsBySearch);
router.get("/:id", getWorkoutById);

router.post("/", auth, createWorkout);
router.put("/:id", auth, updateWorkout);
router.patch("/:id/likeWorkout", auth, likeWorkout);
router.delete("/:id", auth, deleteWorkout);

module.exports = router;
