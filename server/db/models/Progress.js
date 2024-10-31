const db = require("../db");
const { DataTypes } = require("sequelize");

const Progress = db.define("Progress", {
  date: DataTypes.DATE,
  weight: DataTypes.FLOAT, // Weight of the user
  bodyFat: DataTypes.FLOAT, // Body fat percentage
  measurements: DataTypes.JSON, // e.g., chest, arms, waist, etc.
});

module.exports = Progress;
