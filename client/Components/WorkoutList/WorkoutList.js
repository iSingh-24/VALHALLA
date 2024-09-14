import React, { useState, useEffect } from "react";
import { Workout } from "../Workout/Workout";
import { getWorkouts } from "../../ApiCalls/Workout/workoutUtils";

export const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await GetAllWorkouts();
    };
    fetchData();
  }, []);

  const GetAllWorkouts = async () => {
    setWorkouts(await getWorkouts());
  };

  const allWorkouts = workouts.map((workout) => (
    <li key={workout.id}>
      <Workout name={workout.name} />
    </li>
  ));

  return <div>{workouts.length ? allWorkouts : "No Current Workouts"}</div>;
};
