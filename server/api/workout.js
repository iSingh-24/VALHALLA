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

router.post("/create", async (req, res) => {
  const { name: workout } = req.body;

  try {
    const createdWorkout = await Workout.create(workout);
    res.send(createdWorkout);
  } catch (error) {
    const { name } = error;

    if (name === "SequelizeUniqueConstraintError") {
      return res.status(500).json({ message: "Server Error" });
    }
  }
});

router.get("/:id", (req, res) => {
  res.send("Single Workout Path was hit");
});

module.exports = router;
