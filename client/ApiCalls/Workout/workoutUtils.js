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

    return createdWorkout;
  } catch (err) {
    return err;
  }
};

export { getWorkouts, createWorkout };
