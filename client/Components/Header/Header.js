import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const location = useLocation(); //useLocation will show give the params for the current path
  //console.log(location);
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="logo">VALHALLA</h1>
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="workoutlist">Workout List</Link>
      </div>
    </div>
  );
};
