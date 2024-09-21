import axios from "axios";

const getWorkouts = async () => {
  const { data: workouts } = await axios.get("api/workout/workouts");

  return workouts;
};

const createWorkout = async (workout) => {
  try {
    const { data: createdWorkout } = await axios.post(
      "/api/workout/create",
      workout
    );
    console.log("this route was hit as well");
    return createdWorkout;
  } catch (err) {
    console.log("there was an error here");
    return err;
  }
};

export { getWorkouts, createWorkout };
