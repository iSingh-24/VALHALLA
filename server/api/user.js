const router = require("express").Router();
const User = require("../db/models/User");

router.get("/", (req, res, next) => {
  try {
    res.send("Router get route for /api was hit!");
  } catch (err) {
    next(err);
  }
});

//eventually I want to just use the middleware for next(err) instad of the way I am sending the error in my try catch below

router.post("/create", async (req, res) => {
  const { email, firstName, lastName } = req.body;
  try {
    const { dataValues: createdUser } = await User.create({
      firstName,
      lastName,
      email,
    });

    res.send(createdUser);
  } catch (error) {
    const { name } = error;

    if (name === "SequelizeUniqueConstraintError") {
      return res.status(400).send("Email is already in use");
    }

    res.status(500).json({ message: "Server Error" });
  }
});

//user routes

router.get("/users", async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      attributes: ["firstName", "lastName", "id", "email"],
    });
    res.send(allUsers);
  } catch (err) {
    next(err);
  }
});

//PLACE OTHER GET ROUTES ABOVE THIS SO THE :ID DOESN'T IGNORE ALL OTHER ROUTES THAT WILL HAVE /user

router.get("/user/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.send(`User ${id} was hit`);
  } catch (err) {
    next(err);
  }
});

//make sure this isn't a double route

router.delete("user/:id", (req, res, next) => {
  try {
    res.send("Delete route was hit");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
