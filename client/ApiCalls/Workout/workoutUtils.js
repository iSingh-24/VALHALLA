import axios from "axios";

const getWorkouts = async () => {
  const { data: workouts } = await axios.get("api/workout/workouts");

  return workouts;
};

export { getWorkouts };
