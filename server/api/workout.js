const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("Workout Page");
});

router.get("/workouts", async (req, res) => {
  res.send("Workouts Route, All Workouts will be displayed here");
});

module.exports = router;
