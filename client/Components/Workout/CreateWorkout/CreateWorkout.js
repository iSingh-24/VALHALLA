import React, { useState, useEffect } from "react";
import { createWorkout } from "../../../ApiCalls/Workout/workoutUtils";

export const CreateWorkout = () => {
  const [workout, setWorkout] = useState("");

  useEffect(() => {}, []);

  const handleWorkoutName = ({ target }) => {
    setWorkout(target);
  };

  const onWorkoutSubmit = async (e) => {
    e.preventDefault();

    const createdWorkout = await createWorkout({ name: workout });

    if (createdWorkout.response && createdWorkout.response.data) {
      alert(createdWorkout.response.data);
    }
    //create a util function to send the workout to the backend with a post request to database

    setWorkout("");
  };

  return (
    <div>
      <form onSubmit={onWorkoutSubmit}>
        <label>Create Workout</label>
        <input
          type="text"
          placeholder="enter workout name"
          onChange={(e) => handleWorkoutName(e)}
          value={workout}
          required
        />
        <button type="submit">Create Workout</button>
      </form>
    </div>
  );
};
