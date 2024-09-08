import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">VALHALLA</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="workoutlist">Workout List</Link>
      </div>
    </div>
  );
};
