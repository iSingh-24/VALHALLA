const router = require("express").Router();
const Workout = require("../db/models/Workout");

router.get("/", async (req, res) => {
  res.send("Workout Page");
});

router.get("/workouts", async (req, res) => {
  const allWorkouts = await Workout.findAll({ attributes: ["name", "id"] });

  const filteredWorkouts = allWorkouts.map((workout) => workout.dataValues);

  console.log(filteredWorkouts, "here are filtered workouts");

  res.send(filteredWorkouts);
});

router.get("/:id", (req, res) => {
  res.send("Single Workout Path was hit");
});

module.exports = router;
