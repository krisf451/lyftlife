import mongoose from "mongoose";

const workoutSchema = mongoose.Schema({
  title: String,
  description: String,
  workoutType: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Workouts = mongoose.model("Workouts", workoutSchema);

module.exports = Workouts;
