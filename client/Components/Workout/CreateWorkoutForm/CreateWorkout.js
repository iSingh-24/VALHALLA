import React, { useState, useEffect } from "react";
import { createWorkout } from "../../../ApiCalls/Workout/workoutUtils";

export const CreateWorkout = () => {
  const [workout, setWorkout] = useState("");

  useEffect(() => {}, []);

  const handleWorkoutName = ({ target }) => {
    setWorkout(target.value);
  };

  const onWorkoutSubmit = async (e) => {
    e.preventDefault();

    const createdWorkout = await createWorkout({ name: workout });

    if (createdWorkout.response && createdWorkout.response.data) {
      alert(createdWorkout.response.data);
    }

    setWorkout("");
  };

  return (
    <div>
      <form onSubmit={onWorkoutSubmit}>
        <label>Create Workout</label>
        <br></br>
        <input
          type="text"
          placeholder="enter workout name"
          onChange={(e) => handleWorkoutName(e)}
          value={workout}
          required
        />
        <br></br>
        <button type="submit">Create Workout</button>
      </form>
    </div>
  );
};
