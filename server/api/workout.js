const router = require("express").Router();
const Workout = require("../db/models/Workout");

router.get("/", async (req, res, next) => {
  try {
    res.send("Workout Page");
  } catch (err) {
    next(err);
  }
});

router.get("/workouts", async (req, res, next) => {
  try {
    const allWorkouts = await Workout.findAll({ attributes: ["name", "id"] });

    const filteredWorkouts = allWorkouts.map((workout) => workout.dataValues);

    console.log(filteredWorkouts, "here are filtered workouts");

    res.send(filteredWorkouts);
  } catch (err) {
    next(err);
  }
});

router.post("/create", async (req, res) => {
  const { name } = req.body;

  try {
    const createdWorkout = await Workout.create({ name });
    res.send(createdWorkout);
  } catch (error) {
    const { name } = error;

    if (name === "SequelizeUniqueConstraintError") {
      return res.status(400).send("Workout already exists");
    }

    return res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", (req, res, next) => {
  try {
    res.send("Single Workout Path was hit");
  } catch (err) {
    next(err);
  }
});

router.delete("/delete", async (req, res, next) => {
  try {
    console.log(req.body, "here is req body");
    const { workoutId } = req.body;
    console.log(workoutId, "here is workout id");
    const deletedWorkout = await Workout.findByPk(workoutId);
    await deletedWorkout.destroy();
    res.send("Workout was successfully destroyed");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
