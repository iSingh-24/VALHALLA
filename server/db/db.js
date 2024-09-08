const Sequelize = require("sequelize");
const config = {
  logging: false, // Disables SQL query logging in the console
};

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/valhalla",
  config
);

const init = async () => {
  try {
    await db.sync({ force: true }); //this will drop and recreate tables
    console.log("Database was synced successfully");
  } catch (err) {
    console.log(`Error syncing the database: ${err}`);
  }
};

init();

module.exports = db;
