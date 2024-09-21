import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Header } from "./Header/Header";
import { WorkoutList } from "./WorkoutList/WorkoutList";
import { Workout } from "./Workout/Workout";
import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/Signup";
import "./app.css";

import { CreateWorkout } from "./Workout/CreateWorkoutForm/CreateWorkout";

/**
 * TODO: Eventually cleanup the test className in the main div for this component
 */

export const App = () => {
  return (
    <div className="test">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/workoutlist" element={<WorkoutList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <CreateWorkout />
    </div>
  );
};
