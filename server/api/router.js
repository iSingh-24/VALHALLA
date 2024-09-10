const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Router get route for /api was hit!");
});

//user routes

router.get("/users", (req, res) => {
  res.send("Users Route Hit");
});

//PLACE OTHER GET ROUTES ABOVE THIS SO THE :ID DOESN'T IGNORE ALL OTHER ROUTES THAT WILL HAVE /user

router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ${id} was hit`);
});

module.exports = router;
