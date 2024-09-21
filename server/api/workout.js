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
  const { name } = req.body;

  console.log("This route was hit");

  try {
    const createdWorkout = await Workout.create({ name });
    res.send(createdWorkout);
  } catch (error) {
    const { name } = error;
    console.log("there was an error here");
    if (name === "SequelizeUniqueConstraintError") {
      return res.status(400).send("Workout already exists");
    }
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", (req, res) => {
  res.send("Single Workout Path was hit");
});

module.exports = router;
