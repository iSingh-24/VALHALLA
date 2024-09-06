const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Router get route for / was hit!");
});

module.exports = router;
