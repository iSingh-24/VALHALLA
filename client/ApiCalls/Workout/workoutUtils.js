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

const deleteWorkout = async (workoutId) => {
  try {
    const deletedWorkout = await axios.delete("api/workout/delete", {
      data: { workoutId },
    });

    //axios.delete('/',{data:{enter data to pass here}})
    //above is the proper way that req.body will be able to be accessed in the backend routes.
  } catch (err) {
    console.log(`There was a problem. The error is \n ${err}`);
  }
};

export { getWorkouts, createWorkout, deleteWorkout };
