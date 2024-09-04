import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="signup">Sign Up</Link>
      <br />
      <Link to="workoutlist">Workout List</Link>
      <br />
      <Link to="workout">Workout</Link>
    </div>
  );
};
