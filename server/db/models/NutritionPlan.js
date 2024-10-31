const db = require("../db");
const { DataTypes } = require("sequelize");

const NutritionPlan = db.define("NutritionPlan", {
  name: DataTypes.STRING,
  dailyCalories: DataTypes.INTEGER,
});

module.exports = NutritionPlan;
