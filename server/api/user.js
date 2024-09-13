const router = require("express").Router();
const User = require("../db/models/User");

router.get("/", (req, res) => {
  res.send("Router get route for /api was hit!");
});

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

router.get("/users", async (req, res) => {
  const allUsers = await User.findAll({
    attributes: ["firstName", "lastName", "id", "email"],
  });
  res.send(allUsers);
});

//PLACE OTHER GET ROUTES ABOVE THIS SO THE :ID DOESN'T IGNORE ALL OTHER ROUTES THAT WILL HAVE /user

router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ${id} was hit`);
});

module.exports = router;
