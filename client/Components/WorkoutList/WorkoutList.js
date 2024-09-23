import React, { useState, useEffect } from "react";
import { Workout } from "../Workout/Workout";
import {
  getWorkouts,
  deleteWorkout,
} from "../../ApiCalls/Workout/workoutUtils";

/**
 *TODO: Set up a state so when you delete a workout the page automatically rerenders
 Define the fetch data in a diff utility file so we can have cleaner code here since we use it multiple times 
 */

export const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  const deleteWorkoutHandler = async (workoutId) => {
    const workoutDeleted = await deleteWorkout(workoutId);
    const fetchData = async () => {
      await GetAllWorkouts();
    };

    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      await GetAllWorkouts();
    };
    fetchData();
  }, [workouts.length]);

  const GetAllWorkouts = async () => {
    setWorkouts(await getWorkouts());
  };

  const allWorkouts = workouts.map((workout) => (
    <li key={workout.id}>
      <button onClick={() => deleteWorkoutHandler(workout.id)}>X</button>
      <Workout name={workout.name} />
    </li>
  ));

  return <div>{workouts.length ? allWorkouts : "No Current Workouts"}</div>;
};
