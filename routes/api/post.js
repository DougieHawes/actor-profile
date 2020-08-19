const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "post route" });
});

module.exports = router;
