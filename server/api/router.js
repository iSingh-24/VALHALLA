const router = require("express").Router();

const user = require("./user");
const workout = require("./workout");

router.use("/user", user);
router.use("/workout", workout);

module.exports = router;
