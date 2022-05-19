const router = require("express").Router();

const { signin, signup } = require("../controllers/user.js");

router.get("/", (req, res) => {
  res.send("sanity check");
});

router.post("/signin", (req, res) => {
  res.send("signin sanity check");
});
router.post("/signup", (req, res) => {
  res.send("signup sanity check");
});

module.exports = router;
