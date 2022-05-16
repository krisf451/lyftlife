const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("dotenv").config();

const workoutRoutes = require("./routes/workouts.js");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

const PORT = process.env.PORT || 9000;

app.use("/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.json({ message: "sanity check for liftlyfe social" });
});

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
